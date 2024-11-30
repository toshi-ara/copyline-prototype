const ElInputText = document.getElementById("input_text");
const ElBtnCopy = document.getElementById("btn_copy");
const ElBtnClear = document.getElementById("btn_clear");


// get text from textarea in HTML
function getTextArea() {
    return ElInputText.value;
}

// split text by \r\n, \n or \r
function getTextAsList(text) {
    let list = input_text.value.split(/[\r\n|\n|\r]/);
    return list;
}

// get valid line (boolean)
function isValidLine(text) {
    return (text != "" && !text.match(/^#+/)) ? true : false;
}

// drop unvalid lines
function getValidList(list) {
    let result = [];
    for (let text of list){
        if (isValidLine(text)) {
            result.push(text);
        }
    }
    return result;
}


// Regexp
// remove leading bullet point symbol
const regexp1 = /^\s*(-|\+|\*|\(?[A-Za-z0-9]*[\)?|\.?])(\s+.+)/;

// remove leading half-width spaces and tabs
const regexp2 = /^[\x20\t]*(.+)/;
// \x20: half-width spaces
// \u3000: full-width spaces

// remove last half-width spaces and tabs
const regexp3 = /[\x20\t]+$/;

// remove last symbols
const regexp4 = /^(.+?)\s+(#*|[○×]*)$/;

function matchStr(str) {
    const match = str.replace(regexp1, "$2")
        .replace(regexp2, "$1")
        .replace(regexp3, "")
        .replace(regexp4, "$1");
    return match;
};


// main function
function copy() {
    const text = getTextArea();
    const validList = getValidList(getTextAsList(text));

    let fnClipboad = function(list) {
        const N = list.length;
        let res = matchStr(list[i]);

        if (res == "") {
            i++;
        } else {
            navigator.clipboard.writeText(res).then(
                () => {
                    console.log("Success:", res);
                    i++;
                    if (i >= N) {
                        clearInterval(id);
                    }
                },
                () => {
                    console.log("Failed:", res);
                },
            );
        }
    }

    const tm = 600;
    let i = 0;
    let id = setInterval(() => { fnClipboad(validList) }, tm);
}


// add event handler
ElBtnCopy.addEventListener("click", () => { copy() });
ElBtnClear.addEventListener("click", () => {
    ElInputText.value = "";
});

