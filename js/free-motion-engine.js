/**
 * Free Motion Graphics Engine
 * General-purpose, JSON-driven Canvas 2D render engine.
 * Computes animations and draws shapes based on keyframes and spring physics.
 */

// Spring physics mathematical simulation
function getSpringValue(t, tension = 150, friction = 12) {
  if (t < 0) return 0;
  const w0 = Math.sqrt(tension);
  const zeta = friction / (2 * Math.sqrt(tension));
  if (zeta < 1) {
    const wd = w0 * Math.sqrt(1 - zeta * zeta);
    const a = -zeta * w0;
    const b = (zeta * w0) / wd;
    return 1 - Math.exp(a * t) * (Math.cos(wd * t) + b * Math.sin(wd * t));
  }
  return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
}

// Bounce easing mathematical function
function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

// Global evaluation of interpolations
function evaluateEasing(progress, type, timeInSec = 0, tension = 150, friction = 12) {
  if (type === 'linear') return progress;
  if (type === 'easeIn') return progress * progress;
  if (type === 'easeOut') return progress * (2 - progress);
  if (type === 'easeInOut') {
    return progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
  }
  if (type === 'bounce') {
    return easeOutBounce(progress);
  }
  if (type === 'spring') {
    if (progress >= 1.0) return 1.0; // Force exact settling at transition end
    return getSpringValue(timeInSec, tension, friction);
  }
  return progress;
}

class FreeMotionEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    
    // Default base metrics
    this.width = 1280;
    this.height = 720;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    this.background = '#121212';
    this.duration = 300; // in frames
    this.elements = [];
    
    this.isPlaying = false;
    this.frame = 0;
    this.timerId = null;
    this.onFrameCallbacks = [];
  }

  loadData(jsonData) {
    if (!jsonData) return;
    
    // Canvas sizing setup
    if (jsonData.canvas) {
      this.width = jsonData.canvas.width || 1280;
      this.height = jsonData.canvas.height || 720;
      this.background = jsonData.canvas.background || '#121212';
      this.duration = jsonData.canvas.duration || 300;
      
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
    
    this.elements = Array.isArray(jsonData.elements) ? jsonData.elements : [];
    this.setFrame(0);
  }

  registerFrameCallback(cb) {
    this.onFrameCallbacks.push(cb);
  }

  setFrame(f) {
    this.frame = Math.max(0, Math.min(this.duration - 1, f));
    this.draw();
    this.onFrameCallbacks.forEach(cb => cb(this.frame));
  }

  play() {
    if (this.isPlaying || this.duration === 0) return;
    this.isPlaying = true;
    
    const tick = () => {
      if (!this.isPlaying) return;
      this.frame++;
      if (this.frame >= this.duration) {
        this.frame = 0; // loop back
      }
      this.draw();
      this.onFrameCallbacks.forEach(cb => cb(this.frame));
      this.timerId = requestAnimationFrame(tick);
    };
    this.timerId = requestAnimationFrame(tick);
  }

  pause() {
    this.isPlaying = false;
    if (this.timerId) {
      cancelAnimationFrame(this.timerId);
      this.timerId = null;
    }
  }

  // Calculates property value for an element at current frame
  evaluateProperty(element, propertyName, currentFrame) {
    const baseValue = element[propertyName];
    const animations = element.animations ? element.animations.filter(a => a.property === propertyName) : [];
    
    if (animations.length === 0) {
      return baseValue;
    }
    
    // Sort chronologically by startFrame
    animations.sort((a, b) => a.startFrame - b.startFrame);
    
    // If before the first animation
    if (currentFrame < animations[0].startFrame) {
      return animations[0].startValue !== undefined ? animations[0].startValue : baseValue;
    }
    
    // Find active animation or last completed
    let activeAnim = null;
    for (let i = 0; i < animations.length; i++) {
      const anim = animations[i];
      if (currentFrame >= anim.startFrame && currentFrame <= anim.endFrame) {
        activeAnim = anim;
        break;
      }
    }
    
    if (activeAnim) {
      // Interpolate
      const startF = activeAnim.startFrame;
      const endF = activeAnim.endFrame;
      const startV = activeAnim.startValue !== undefined ? activeAnim.startValue : baseValue;
      const endV = activeAnim.endValue !== undefined ? activeAnim.endValue : baseValue;
      
      const frameDelta = endF - startF;
      const progress = frameDelta > 0 ? (currentFrame - startF) / frameDelta : 1.0;
      const timeInSec = (currentFrame - startF) / 60;
      
      const easedProgress = evaluateEasing(
        progress,
        activeAnim.easing || 'linear',
        timeInSec,
        activeAnim.tension,
        activeAnim.friction
      );
      
      return startV + (endV - startV) * easedProgress;
    }
    
    // If after the last animation
    const lastAnim = animations[animations.length - 1];
    if (currentFrame > lastAnim.endFrame) {
      return lastAnim.endValue !== undefined ? lastAnim.endValue : baseValue;
    }
    
    return baseValue;
  }

  evaluateElementProps(element, currentFrame) {
    const props = {};
    const animatedKeys = [
      'x', 'y', 'width', 'height', 'radius', 'opacity', 'scale', 
      'rotation', 'strokeWidth', 'spacing'
    ];
    
    // Copy all static attributes
    Object.keys(element).forEach(key => {
      if (key !== 'animations') {
        props[key] = element[key];
      }
    });
    
    // Evaluate animated values
    animatedKeys.forEach(key => {
      if (element[key] !== undefined || (element.animations && element.animations.some(a => a.property === key))) {
        props[key] = this.evaluateProperty(element, key, currentFrame);
      }
    });
    
    // Defaults if missing
    if (props.opacity === undefined) props.opacity = 1.0;
    if (props.scale === undefined) props.scale = 1.0;
    if (props.rotation === undefined) props.rotation = 0;
    if (props.fill === undefined) props.fill = true;
    
    return props;
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    
    // Clear screen
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, w, h);
    
    if (this.elements.length === 0) {
      ctx.fillStyle = '#555';
      ctx.font = '24px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('No Elements in Timeline', w / 2, h / 2);
      return;
    }
    
    this.elements.forEach(el => {
      const props = this.evaluateElementProps(el, this.frame);
      if (props.opacity <= 0) return; // Skip drawing invisible objects
      
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, props.opacity));
      
      const px = props.x || 0;
      const py = props.y || 0;
      
      // Center pivot point translation
      ctx.translate(px, py);
      
      if (props.scale !== 1.0) {
        ctx.scale(props.scale, props.scale);
      }
      if (props.rotation !== 0) {
        ctx.rotate(props.rotation * Math.PI / 180);
      }
      
      // Styling properties
      ctx.fillStyle = props.color || '#ffffff';
      ctx.strokeStyle = props.strokeColor || '#ffffff';
      ctx.lineWidth = props.strokeWidth || 0;
      
      if (el.type === 'rect') {
        const ew = props.width || 100;
        const eh = props.height || 100;
        const r = props.radius || 0;
        
        ctx.beginPath();
        if (r > 0) {
          ctx.roundRect(-ew / 2, -eh / 2, ew, eh, r);
        } else {
          ctx.rect(-ew / 2, -eh / 2, ew, eh);
        }
        if (props.fill) ctx.fill();
        if (props.strokeWidth > 0) ctx.stroke();
        
      } else if (el.type === 'circle') {
        const er = props.radius || 50;
        ctx.beginPath();
        ctx.arc(0, 0, er, 0, Math.PI * 2);
        if (props.fill) ctx.fill();
        if (props.strokeWidth > 0) ctx.stroke();
        
      } else if (el.type === 'text') {
        ctx.font = props.font || 'bold 36px sans-serif';
        ctx.textAlign = props.align || 'center';
        ctx.textBaseline = props.baseline || 'middle';
        
        const txt = props.text !== undefined ? String(props.text) : '';
        if (props.fill) ctx.fillText(txt, 0, 0);
        if (props.strokeWidth > 0) ctx.strokeText(txt, 0, 0);
        
      } else if (el.type === 'line') {
        const pts = props.points || [[0, 0], [100, 100]];
        ctx.lineCap = props.strokeCap || 'round';
        ctx.beginPath();
        if (pts.length > 0) {
          ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i][0], pts[i][1]);
          }
        }
        ctx.stroke();
        
      } else if (el.type === 'grid') {
        const size = props.width || 2000;
        const spacing = props.spacing || 80;
        ctx.lineWidth = props.strokeWidth || 1;
        ctx.strokeStyle = props.color || 'rgba(255,255,255,0.08)';
        
        ctx.beginPath();
        // Horizontal lines
        for (let gy = -size / 2; gy <= size / 2; gy += spacing) {
          ctx.moveTo(-size / 2, gy);
          ctx.lineTo(size / 2, gy);
        }
        // Vertical lines
        for (let gx = -size / 2; gx <= size / 2; gx += spacing) {
          ctx.moveTo(gx, -size / 2);
          ctx.lineTo(gx, size / 2);
        }
        ctx.stroke();
      }
      
      ctx.restore();
    });
  }

  exportVideo(onProgress, onComplete) {
    if (this.duration === 0) return;
    this.pause();
    
    const stream = this.canvas.captureStream(60);
    // vp9 codec for high quality WebM
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp9' });
    const chunks = [];
    
    recorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      onComplete(URL.createObjectURL(blob));
    };
    
    recorder.start();
    let exportFrame = 0;
    
    const renderNextFrame = () => {
      if (exportFrame >= this.duration) {
        recorder.stop();
        return;
      }
      
      this.frame = exportFrame;
      this.draw();
      
      if (exportFrame % 5 === 0) {
        onProgress(Math.floor((exportFrame / this.duration) * 100));
      }
      
      exportFrame++;
      // Yield to thread to allow progress rendering
      setTimeout(renderNextFrame, 4); 
    };
    
    renderNextFrame();
  }
}

window.FreeMotionEngine = FreeMotionEngine;
