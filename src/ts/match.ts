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


export function getMatchStr(str: string): string {
    const match = str.replace(regexp1, "$2")
        .replace(regexp2, "$1")
        .replace(regexp3, "")
        .replace(regexp4, "$1");
    return match;
};

