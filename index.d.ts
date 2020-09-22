import { BlockTool, InlineTool, PasteEvent, SanitizerConfig } from "@editorjs/editorjs";
import { MoveEvent } from "@editorjs/editorjs/types/tools";

declare module 'editorjs-footnotes' {
    export class Footnote implements BlockTool {
        sanitize?: SanitizerConfig;
        save(block: HTMLElement): void;
        renderSettings?(): HTMLElement;
        validate?(blockData: any): boolean;
        merge?(blockData: any): void;
        onPaste?(event: PasteEvent): void;
        rendered?(): void;
        updated?(): void;
        removed?(): void;
        moved?(event: MoveEvent): void;
        render(): HTMLElement;
    }
    export class FootnoteMaker implements InlineTool {
        shortcut?: string;
        surround(range: Range): void;
        checkState(selection: Selection): boolean;
        renderActions?(): HTMLElement;
        clear?(): void;
        render(): HTMLElement;
    }
}