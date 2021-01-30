window.Prism = window.Prism || {};
Prism.manual = true;

function escapeForRegexAndNameCorrection(unsafe) {
    return unsafe
        .replace(/&|\\a/g, "&")
        .replace(/<|\\l/g, "<")
        .replace(/>|\\g/g, ">")
        .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function setupPrism() {
    const operatorsSortedByLen = THE_OBJ.funcs.filter(f => f.type === 'operator');
    operatorsSortedByLen.sort((a, b) => b.name.length - a.name.length);

    Prism.languages.cks = Prism.languages.extend('clike', {
        'keyword': new RegExp(`\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue|${
            THE_OBJ.classes.map(cl => cl.name).join("|")
        })\\b`),
        'function': null,
        // 'function': /\w+(?=\()|(?<=\.)\w+\b/
        'cks-method': new RegExp('\\b(?:' + THE_OBJ.funcs.filter(f => f.type === 'method')
            .map(f => escapeForRegexAndNameCorrection(f.name)).join('|') + ')\\b'),
        'operator': new RegExp(operatorsSortedByLen
            .map(f => escapeForRegexAndNameCorrection(f.name)).join('|'))
    });

    Prism.languages.insertBefore('cks', 'punctuation', {
        'cks-property': new RegExp('(?<=\\.)(?:' + THE_OBJ.funcs.filter(f => f.type === 'property')
            .map(f => escapeForRegexAndNameCorrection(f.name)).join('|') + ')\\b')
    });

    Prism.languages.insertBefore('cks', 'string', {
        'constant': /\b(?:Gaul|RepublicanRome|Carthage|Iberia|ImperialRome|Britain|Egypt|Germany|gsWindOfWisdom|gsStarvation|gsSoothingRain|gsDivineSacrifice|gsBloodlust|gsTribute)\b/
    });

    Prism.languages.insertBefore('cks', 'class-name', {
        'implicit-this': {
            alias: 'punctuation',
            pattern: /(?<!\w|[\])])\./
        }
    });

}
