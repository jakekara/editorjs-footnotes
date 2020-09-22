# editorjs-footnotes

> footnotes for [editor.js](https://github.com/codex-team/editor.js)

## Overview

Adds a `Footnote` that implements `BlockTool` and FootnoteMaker that implements `InlineTool` that allows use to select a span of text and generate a new block. Automatically inserts an anchor link with a generated id.

[![Watch on a video demo on YouTube](https://img.youtube.com/vi/ioWUm3nI_mE/0.jpg)](https://youtu.be/ioWUm3nI_mE "Watch a video demo on YouTube")

## Live demo

Try it a [live demo here](https://jakekara-editorjs-footnotes.netlify.app/).

## Usage example

Install:

```bash
npm add -D editorjs-footnotes
```

Then:

```javascript
import EditorJS from "@editorjs/editorjs";
import { Footnote, FootnoteMaker } from "editorjs-footnotes";

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
