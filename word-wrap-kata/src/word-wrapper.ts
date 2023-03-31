export class WordWrapper {
    public wrappedText: string
    public WarningMessages: string[] = [];

    constructor(wrappedText: string) {
        this.wrappedText = wrappedText;
    }
}