import { timeInterval } from "./setting"
import { getTextAsList, getValidList } from "./functions"
import { getMatchStr } from "./match"


const ElInputText = <HTMLInputElement>document.getElementById("input_text");
const ElOutputText = <HTMLElement>document.getElementById("output_text");


function displayMessage(str: string) {
    let output = ElOutputText.innerText;
    output = output + str;
    ElOutputText.innerText = output;
}


export function copyline() {
    const text = ElInputText.value;  // get text from textarea in HTML
    const validList = getValidList(getTextAsList(text));

    let fnClipboad = function(list: string[]) {
        const N = list.length;
        if (N == 0) {
            clearInterval(id);
            displayMessage("No item is copied\n=== Copy end ===");
        }

        let res = getMatchStr(list[i]);
        if (res == "") {
            i++;  // next item
        } else {
            navigator.clipboard.writeText(res).then(
                () => {
                    displayMessage(res + "\n");

                    // next item
                    i++;
                    if (i == N) {
                        clearInterval(id);
                        displayMessage( "=== Copy end ===");
                    }
                },
                () => {}  // failed
            );
        }
    }

    let i = 0;
    let id = setInterval(() => { fnClipboad(validList) }, timeInterval);
}

