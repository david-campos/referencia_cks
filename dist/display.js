function renderType(type, isPtr, classes) {
    return `<span class="type ${classes[type]}">${classes[type]}${isPtr ? '<span class="ptr">*</span>' : ''}</span>`;
}

function addReturn(func, classes) {
    return `<span class="return"><span class="two_dots"> : </span>${renderType(func.returns, func.returns_ptr, classes)}</span>`;
}

function renderParam(param, classes) {
    return `<span class="param"><span class="name">${param.name}</span><span class="two_dots mid">:</span>${renderType(param.type, param.is_ptr, classes)}</span>`
}

function renderFunction(func, classes) {
    switch (func.type) {
        case 'operator':
            if (func.params.length === 2) {
                const param0 = func.params[0];
                const param1 = func.params[1];
                return `<div class="binary operator">
                            ${renderType(param0.type, param0.is_ptr, classes)}
                            <span class="op">${func.name}</span>
                            ${renderType(param1.type, param1.is_ptr, classes)}
                            ${addReturn(func, classes)}
                        </div>`.replace(/\n\s*/g, '');
            } else {
                const param0 = func.params[0];
                return `<div class="unary operator">
                            <span class="op">${func.name}</span>
                            ${renderType(param0.type, param0.is_ptr, classes)}
                            ${addReturn(func, classes)}
                        </div>`.replace(/\n\s*/g, '');
            }
        case 'property':
            return `<div class="property">
                        ${renderType(func.of, func.of_ptr, classes)}
                        <span class="in">::</span>
                        <span class="prop">${func.name}</span>
                        ${addReturn(func, classes)}
                    </div>`.replace(/\n\s*/g, '')
        case 'method':
            if (func.of != null) {
                return `<div class="method">
                            ${renderType(func.of, func.of_ptr, classes)}
                            <span class="in">::</span>
                            <span class="meth">${func.name}</span>
                            <span class="par open">(</span>
                            ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,</span>')}
                            <span class="par close">)</span>
                            ${addReturn(func, classes)}
                        </div>`.replace(/\n\s*/g, '')
            } else {
                return `<div class="method">
                            <span class="meth">${func.name}</span>
                            <span class="par open">(</span>
                            ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,</span>')}
                            <span class="par close">)</span>
                            ${addReturn(func, classes)}
                        </div>`.replace(/\n\s*/g, '')
            }
    }
}

const TYPES_ORDER = {
    'operator': 0,
    'property': 1,
    'method': 2
};

const TRANSLATE_TYPES = {
    'operator': 'Operadores',
    'property': 'Propiedades',
    'method': 'Métodos'
};

THE_OBJ.funcs.sort((a, b) => {
    if (a.of === b.of) {
        if (a.type === b.type) return a.name.localeCompare(b.name);
        else return TYPES_ORDER[a.type] - TYPES_ORDER[b.type];
    }else if (a.of === null) return 1;
    else if (b.of === null) return -1;
    else return a.of - b.of;
});
let html = "";
let last_of = null;
let last_type;
for (const func of THE_OBJ.funcs) {
    if (func.of !== last_of) {
        html += `</details><details class="class" open><summary><h2>${func.of != null ? THE_OBJ.classes[func.of] : 'No class'}</h2></summary>`;
        last_of = func.of;
        last_type = null;
    }
    if (func.type !== last_type) {
        html += `<h3>${TRANSLATE_TYPES[func.type]}</h3>`
        last_type = func.type;
    }
    html += renderFunction(func, THE_OBJ.classes);
}
html += "</div>"
console.log(html);
document.getElementById('main').innerHTML = html;
