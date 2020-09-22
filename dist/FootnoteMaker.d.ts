import { API, InlineTool } from "@editorjs/editorjs";
export declare class FootnoteMaker implements InlineTool {
    api: API;
    button?: HTMLButtonElement;
    state: boolean;
    static get isInline(): boolean;
    constructor(args: {
        api: API;
    });
    render(): HTMLButtonElement;
    surround(range: Range): void;
    clear(): void;
    checkState(selection: Selection): boolean;
}
//# sourceMappingURL=FootnoteMaker.d.ts.map