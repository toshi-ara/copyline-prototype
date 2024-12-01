import { timeInterval } from "./setting"
import { getTextArea, getTextAsList, getValidList } from "./functions"
import { getMatchStr } from "./match"


const ElOutputText = <HTMLElement>document.getElementById("output_text");


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

