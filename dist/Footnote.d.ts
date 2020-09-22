import Paragraph from "@editorjs/paragraph";
import { API, BlockToolData, EditorConfig } from "@editorjs/editorjs";
export declare class Footnote extends Paragraph {
    constructor(opts: {
        data: BlockToolData;
        config: EditorConfig;
        api: API;
    });
    renderEmbedCode(): void;
    toggleEnableEmbedCode(): void;
    static get sanitize(): {
        id: boolean;
        text: {
            i: boolean;
            a: boolean;
            b: boolean;
        };
        embedCode: boolean;
    };
    save(blockContent: BlockToolData): {
        id: any;
        text: any;
        embedCode: any;
    };
    renderSettings(): HTMLDivElement;
    render(): HTMLDivElement;
    /**
     * Icon and title for displaying at the Toolbox
     *
     * @return {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: string;
        title: string;
    };
}
//# sourceMappingURL=Footnote.d.ts.map