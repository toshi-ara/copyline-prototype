import { copyline } from "./copy"


const ElInputText = <HTMLInputElement>document.getElementById("input_text");
const ElOutputText = <HTMLElement>document.getElementById("output_text");
const ElBtnCopy = <HTMLInputElement>document.getElementById("btn_copy");
const ElBtnClear = <HTMLInputElement>document.getElementById("btn_clear");


// add event handler
ElBtnCopy.addEventListener("click", () => {
    ElOutputText.innerText = "=== Copy start ===\n";
    copyline()
});

ElBtnClear.addEventListener("click", () => {
    ElInputText.value = "";
    ElOutputText.innerText = "";
});

