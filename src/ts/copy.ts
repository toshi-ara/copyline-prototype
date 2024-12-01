import { timeInterval } from "./setting"
import { getTextAsList, getValidList } from "./functions"
import { getMatchStr } from "./match"


const ElInputText = <HTMLInputElement>document.getElementById("input_text");
const ElOutputText = <HTMLElement>document.getElementById("output_text");


// get text from textarea in HTML
export function getTextArea() {
    return ElInputText.value;
}


export function copyline() {
    const text = getTextArea();
    const validList = getValidList(getTextAsList(text));

    let fnClipboad = function(list: string[]) {
        const N = list.length;
        let res = getMatchStr(list[i]);

        if (res == "") {
            i++;
        } else {
            navigator.clipboard.writeText(res).then(
                () => {
                    let Output = ElOutputText.innerText;
                    Output = Output + res + "\n";
                    ElOutputText.innerText = Output;
                    i++;
                    if (i == N) {
                        clearInterval(id);
                        let Output = ElOutputText.innerText;
                        Output = Output + "=== Copy end ===\n";
                        ElOutputText.innerText = Output;
                    }
                },
                () => {},
            );
        }
    }

    let i = 0;
    let id = setInterval(() => { fnClipboad(validList) }, timeInterval);
}

