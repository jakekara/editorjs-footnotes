# editorjs-footnotes

> footnotes for [editor.js](https://github.com/codex-team/editor.js)

## Live demo

There's a live demo [here](https://jakekara-editorjs-footnotes.netlify.app/). To use it, select any text in a paragraph and click the "M" icon to add a footnote. Then a footnote box will appear. Clicking the block tun button for the footnote block, click the "<>" code icon to add arbitrary code (for example, a youtube video embed code).

## Overview

Adds a `Footnote` that implements `BlockTool` and FootnoteMaker that implements `InlineTool` that allows use to select a span of text and generate a new block. Automatically inserts an anchor link with a generated id.

## Usage example

```javascript
import EditorJS from "@editorjs/editorjs";
import { Footnote, FootnoteMaker } from "@jakekara/editorjs-footnotes";

const holderElement = document.createElement("div");
holderElement.setAttribute("id", "editor-js-holder");
document.body.appendChild(holderElement);

new EditorJS({
  holder: "editor-js-holder",
  autofocus: true,
  tools: {
    FootnoteMaker,
    footnoteParagraph: {
      class: Footnote,
      inlineToolbar: ["link", "bold", "italic"], // don't allow footnotes to add footnotes
    },
  },
});
```
