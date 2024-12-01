const ElInputText = <HTMLInputElement>document.getElementById("input_text");


// get text from textarea in HTML
export function getTextArea() {
    return ElInputText.value;
}

// split text by \r\n, \n or \r
export function getTextAsList(text: string): string[] {
    let list = text.split(/[\r\n|\n|\r]/);
    return list;
}

// get valid line (boolean)
export function isValidLine(text: string): boolean {
    return (text != "" && !text.match(/^#+/)) ? true : false;
}

// drop unvalid lines
export function getValidList(list: string[]): string[] {
    let result = [];
    for (let text of list){
        if (isValidLine(text)) {
            result.push(text);
        }
    }
    return result;
}

