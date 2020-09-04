let lang = '';
let groupBy = 'of';

const TRANSLATE_TEXTS = {
    'no-desc-': 'Sin descripción todavía.',
    'no-desc-en': 'No description yet.',
    'no-class-': "Sin clase",
    'no-class-en': "No class",
    "group-by-": "Agrupar por:",
    "group-by-en": "Group by:",
    "gb-class-": "clase",
    "gb-class-en": "class",
    "gb-return-": "tipo de retorno",
    "gb-return-en": "return type"
}

function escapeHtmlAndNameCorrection(unsafe) {
    return unsafe
        .replace(/&|\\a/g, "&amp;")
        .replace(/<|\\l/g, "&lt;")
        .replace(/>|\\g/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderType(type, isPtr, classes) {
    return `<a href="#${classes[type].name}" class="type ${classes[type].name}">${classes[type].name}${isPtr ? '<span class="ptr">*</span>' : ''}</a>`;
}

function addReturn(func, classes) {
    return `<span class="return"><span class="two_dots">: </span>${renderType(func.returns, func.returns_ptr, classes)}</span>`;
}

function renderParam(param, classes) {
    return `<span class="param"><span class="name">${escapeHtmlAndNameCorrection(param['name_' + lang] || param.name)}</span><span class="two_dots mid">:</span>${renderType(param.type, param.is_ptr, classes)}</span>`
}

function renderDescription(func) {
    return `<div class="description">${func['description_' + lang] || func.description
    || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>`}</div>`;
}

function typeForIdentifier(type, isPtr, classes) {
    return `${isPtr ? 'ptr.' : ''}${classes[type].name}`;
}

function correctNameForIdentifier(name) {
    return name
        .replace(/-/g, '-m-')
        .replace(/\+/g, '-p-')
        .replace(/=/g, '-e-')
        .replace(/\*/g, '-a-')
        .replace(/!/g, '-x-')
        .replace(/\^/g, '-h-')
        .replace(/\[/g, '-c-')
        .replace(/\|/g, '-b-')
        .replace(/\//g, '-s-')
        .replace(/\\/g, '-bs-');
}

function uniqueIdentifierForFunc(func, classes) {
    return (func.of ? `${typeForIdentifier(func.of, func.of_ptr, classes)}::` : '')
        + correctNameForIdentifier(func.name)
        + (func.params.length > 0
            ? ':' + func.params.map(p => typeForIdentifier(p.type, p.is_ptr, classes)).join('_')
            : '');
}

function renderFunction(func, classes) {
    switch (func.type) {
        case 'operator':
            if (func.params.length === 2) {
                const param0 = func.params[0];
                const param1 = func.params[1];
                return `<div class="binary operator" id="${uniqueIdentifierForFunc(func, classes)}">
                            ${renderType(param0.type, param0.is_ptr, classes)}
                            <span class="op">${escapeHtmlAndNameCorrection(func.name)}</span>
                            ${renderType(param1.type, param1.is_ptr, classes)}
                            ${addReturn(func, classes)}
                            ${renderDescription(func)}
                        </div>`.replace(/\n\s*/g, '');
            } else {
                const param0 = func.params[0];
                return `<div class="unary operator" id="${uniqueIdentifierForFunc(func, classes)}">
                            <span class="op">${escapeHtmlAndNameCorrection(func.name)}</span>
                            ${renderType(param0.type, param0.is_ptr, classes)}
                            ${addReturn(func, classes)}
                            ${renderDescription(func)}
                        </div>`.replace(/\n\s*/g, '');
            }
        case 'property':
            return `<div class="property" id="${uniqueIdentifierForFunc(func, classes)}">
                        ${renderType(func.of, func.of_ptr, classes)}
                        <span class="in">::</span>
                        <span class="prop">${escapeHtmlAndNameCorrection(func.name)}</span>
                        ${addReturn(func, classes)}
                        ${renderDescription(func)}
                    </div>`.replace(/\n\s*/g, '')
        case 'method':
            if (func.of != null) {
                return `<div class="method" id="${uniqueIdentifierForFunc(func, classes)}">
                            ${renderType(func.of, func.of_ptr, classes)}
                            <span class="in">::</span>
                            <span class="meth">${escapeHtmlAndNameCorrection(func.name)}</span>
                            <span class="par open">(</span>
                            ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,</span>')}
                            <span class="par close">)</span>
                            ${addReturn(func, classes)}
                            ${renderDescription(func)}
                        </div>`.replace(/\n\s*/g, '')
            } else {
                return `<div class="method" id="${uniqueIdentifierForFunc(func, classes)}">
                            <span class="meth">${escapeHtmlAndNameCorrection(func.name)}</span>
                            <span class="par open">(</span>
                            ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,</span>')}
                            <span class="par close">)</span>
                            ${addReturn(func, classes)}
                            ${renderDescription(func)}
                        </div>`.replace(/\n\s*/g, '')
            }
    }
}

const TYPES_ORDER = {
    'operator': 1,
    'property': 0,
    'method': 2
};

const TRANSLATE_TYPES = {
    'operator-': 'Operadores',
    'operator-en': 'Operators',
    'property-': 'Propiedades',
    'property-en': 'Properties',
    'method-': 'Métodos',
    'method-en': 'Methods'
};

function sortFuncs() {
    THE_OBJ.funcs.sort((a, b) => {
        if (a[groupBy] === b[groupBy]) {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            else return TYPES_ORDER[a.type] - TYPES_ORDER[b.type];
        } else if (a[groupBy] === null) return 1;
        else if (b[groupBy] === null) return -1;
        else return a[groupBy] - b[groupBy];
    });
}

function render() {
    const t0 = performance.now();
    let html = "";
    let last_group = null;
    let last_type;
    let copy_classes = THE_OBJ.classes.slice();
    for (const func of THE_OBJ.funcs) {
        if (func[groupBy] !== last_group) {
            if (html !== "") {
                html += '</details>';
            }
            html += `<details class="class" ${
                func[groupBy] != null ? `id="${THE_OBJ.classes[func[groupBy]].name}"` : ""
            } open><summary><h2>${
                func[groupBy] != null ? THE_OBJ.classes[func[groupBy]].name : TRANSLATE_TEXTS['no-class-' + lang]
            }</h2></summary>`;
            if (func[groupBy] != null) {
                const theClass = THE_OBJ.classes[func[groupBy]];
                copy_classes.splice(copy_classes.indexOf(theClass), 1);
                html += `<p>${theClass['description_' + lang] || theClass.description
                || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>`}</p>`;
            }
            last_group = func[groupBy];
            last_type = null;
        }
        if (func.type !== last_type) {
            html += `<h3>${TRANSLATE_TYPES[func.type + '-' + lang]}</h3>`
            last_type = func.type;
        }
        html += renderFunction(func, THE_OBJ.classes);
    }
    for (const missing of copy_classes) {
        html += `</details><details class="class" id="${missing.name}" open><summary><h2>${
            missing.name
        }</h2></summary>`;
        html += `<p>${missing['description_' + lang] || missing.description
        || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>`}</p>`;
    }
    html += "</details>";
    document.getElementById('main').innerHTML = html;
    const t1 = performance.now();
    console.log("Rendered in", (t1 - t0), "ms.");
}

window.onload = function () {
    const lang_select = document.getElementById('lang_select');
    const groupByLabel = document.getElementById('group-by-label');
    const groupBySelect = document.getElementById('group-by-select');

    function updateSelectText() {
        groupByLabel.innerText = TRANSLATE_TEXTS['group-by-' + lang];
        groupBySelect.options.item(0).innerText = TRANSLATE_TEXTS['gb-class-' + lang];
        groupBySelect.options.item(1).innerText = TRANSLATE_TEXTS['gb-return-' + lang];
    }

    lang_select.addEventListener('change', () => {
        lang = lang_select.value;
        updateSelectText();
        render();
    });
    groupBySelect.addEventListener('change', () => {
        groupBy = groupBySelect.value;
        sortFuncs();
        render();
    });
    updateSelectText();
    sortFuncs();
    render();
}
