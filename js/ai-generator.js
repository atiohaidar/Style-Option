/**
 * AI Generator Logic for Style-Option
 * Handles API calls to openmodel.ai to generate JSON content from prompts.
 */

const AI_CONFIG = {
    // apiUrl: 'https://api.openmodel.ai/v1/messages', // Direct call (often fails due to CORS)
    apiUrl: 'https://api.openmodel.ai/v1/messages',
    defaultModel: 'deepseek-v4-flash',
    anthropicVersion: '2023-06-01',
    useProxy: false // Toggle this if CORS issues persist
};

async function generateAIContent(prompt, apiKey, model, systemPrompt, useProxy = false) {
    if (!apiKey) {
        throw new Error('API Key is required');
    }

    let url = AI_CONFIG.apiUrl;
    if (useProxy) {
        url = 'https://cors-anywhere.herokuapp.com/' + url;
    }

    // If you encounter CORS issues, you might need a proxy.
    // For local development, you can use a browser extension to disable CORS
    // or use a proxy service.

    const headers = {
        'x-api-key': apiKey,
        'anthropic-version': AI_CONFIG.anthropicVersion,
        'content-type': 'application/json'
    };

    // Add Origin header when using proxy to avoid "Missing required request header" error
    if (useProxy) {
        headers['Origin'] = window.location.origin;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            model: model || AI_CONFIG.defaultModel,
            max_tokens: 4096,
            system: systemPrompt,
            messages: [
                { role: 'user', content: prompt }
            ]
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.msg || `API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Find the text content in the response
    const textContent = data.content.find(block => block.type === 'text')?.text;

    if (!textContent) {
        throw new Error('No text content received from AI');
    }

    // Try to extract JSON from the text content (in case the AI adds markdown or preamble)
    const jsonMatch = textContent.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
    if (!jsonMatch) {
        throw new Error('Could not find valid JSON in the AI response');
    }

    return jsonMatch[0];
}

// System prompts for different contexts
const SYSTEM_PROMPTS = {
    freeMotion: `You are a Motion Graphics JSON Generator. 
Generate valid JSON for a motion graphics engine. 
The JSON structure should look like this:
{
  "canvas": { "width": 1280, "height": 720, "background": "#121212", "duration": 300 },
  "elements": [
    {
      "type": "rect", "x": 100, "y": 100, "width": 100, "height": 100, "fill": "#BFFF00",
      "animations": [
        { "property": "x", "startFrame": 0, "endFrame": 60, "startValue": 100, "endValue": 500, "easing": "spring", "tension": 150, "friction": 12 }
      ]
    }
  ]
}
Elements can be: rect, circle, text, line.
Use spring easing for smooth motion. 
ONLY return the JSON. No explanation.`,

    slidesEditor: `You are a Slides-as-Code JSON Generator.
Generate valid JSON for a presentation slide engine.
The JSON structure is an array of slide objects:
[
  {
    "type": "title",
    "title": "Slide Title",
    "subtitle": "Subtitle here",
    "authors": "Author Name",
    "notes": "Speaker notes"
  },
  {
    "type": "content",
    "title": "Main Points",
    "bullets": ["Point 1", "Point 2"],
    "notes": "Speaker notes"
  },
  {
    "type": "split",
    "title": "Comparison",
    "bullets": ["Left point"],
    "rightType": "table",
    "table": {
      "headers": ["Col 1", "Col 2"],
      "rows": [["Val 1", "Val 2"]]
    },
    "notes": "Speaker notes"
  }
]
Slide types: title, content, split (with rightType: table, chart, or metric).
ONLY return the JSON. No explanation.`
};
