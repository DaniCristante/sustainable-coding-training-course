import { WordWrapper } from "./word-wrapper"

export class Width {
    public widthValue: number;

    private constructor(widthValue: number) {
        this.widthValue = widthValue;
    }

    public static buildWidth(widthValue: string): Width {

        if (widthValue.length <= 0) {
            throw new Error('Column width must not be empty');
        }
        
        const widthValueAsNumber = parseInt(widthValue);

        if (!isNaN(widthValueAsNumber)) {
            throw new Error('Column width must be a number');
        }

        
        if (widthValueAsNumber <= 0) {
            throw new Error('Column width must be greater than 0');
        }

        return new Width(widthValueAsNumber);
    }
}


export class Text {
    public text: string;

    public getText(): string {
        return this.text;
    }

    private constructor(text: string) {
        this.text = text;
    }

    public static buildText(text: string): Text {
        if (text.length <= 0) {
            throw new Error('Text to wrap must not be empty');
        }

        return new Text(text);
    }

}

export class Controller {

    public subscribeToEvents(aDocument: Document, {columnWidthId, editorId, applyId}:
        {
            columnWidthId: string,
            editorId: string,
            applyId: string
        }): void {
        const columnWidthInput = aDocument.getElementById(columnWidthId) as HTMLInputElement
        if (columnWidthInput == null) {
            console.log(`Wrong id for widgets: ${columnWidthId}`)
        }
        const editorWidget = aDocument.getElementById(editorId) as HTMLTextAreaElement
        if (editorWidget == null) {
            console.log(`Wrong id for widgets: ${editorId}`)
        }
        const applyButton = aDocument.getElementById(applyId) as HTMLButtonElement
        if (applyButton == null) {
            console.log(`Wrong id for widgets: ${applyId}`)
        }
        console.log('Subscribing events...')

        applyButton.onclick = () => {
            console.log('Button apply clicked');
            console.log('ColumnWidth: ', columnWidthInput.value);
            console.log('Text: ', editorWidget.value);

            const resultWidget = aDocument.getElementById('result') as HTMLTextAreaElement;

            resultWidget.value = this.bestWordWrapperEver(
                    Text.buildText(editorWidget.value), 
                    Width.buildWidth(columnWidthInput.value)
                ).wrappedText;
        }
    }

    public bestWordWrapperEver(text: Text, width: Width): WordWrapper {
        text.text = 'fii';
        width.widthValue = 5;

        return new WordWrapper('Hola Mundo');
    }
}