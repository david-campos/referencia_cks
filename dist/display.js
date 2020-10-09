let lang = location.search === '?en' ? 'en' : '';
let groupBy = 'of';
const filters = [];
const funcsById = new Map();

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
    "gb-return-en": "return type",
    "search-": "Filtrar por nombre...",
    "search-en": "Filter by name...",
    "related-": "Relacionado:",
    "related-en": "Related:",
    "documented-": "Documentado:",
    "documented-en": "Documented: "
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
    return `<wbr><span class="return"><span class="two_dots">:&nbsp;</span>${renderType(func.returns, func.returns_ptr, classes)}</span>`;
}

function renderParam(param, classes) {
    return `<wbr><span class="param"><span class="name">${escapeHtmlAndNameCorrection(param['name_' + lang] || param.name)}</span><span class="two_dots mid">:</span>${renderType(param.type, param.is_ptr, classes)}</span>`
}

function renderRelated(inFunction, relatedList) {
    if (!relatedList || relatedList.length === 0) return '';
    return `<div class="related">${TRANSLATE_TEXTS['related-' + lang]} ${relatedList.map(elementId => {
        const element = funcsById.get(elementId);
        if (!element) {
            console.warn(`Unknown related function in "${inFunction.id}": "${elementId}".`);
            return `[unknown ${elementId}]`;
        }
        const of = element.of ? THE_OBJ.classes[element.of].name + "::" : '';
        if (element.type === 'operator') {
            const param0 = element.params.length === 2
                ? typeForIdentifier(element.params[0].type, element.params[0].is_ptr, THE_OBJ.classes) + ' '
                : '';
            const param1idx = element.params.length === 2 ? 1 : 0;
            const param1 = typeForIdentifier(element.params[param1idx].type, element.params[param1idx].is_ptr, THE_OBJ.classes);
            return `<a href="#${elementId}">${param0}${escapeHtmlAndNameCorrection(element.name)} ${param1}</a>`;
        } else {
            const params = element.type === 'method' ? `(${element.params.map(
                p => typeForIdentifier(p.type, p.is_ptr, THE_OBJ.classes)
            ).join(", ")})` : '';
            return `<a href="#${elementId}">${of}${escapeHtmlAndNameCorrection(element.name)}${params}</a>`;
        }
    }).join(', ')}</div>`;
}

function renderDescription(func) {
    return `<div class="description">${renderDangerousWarn(func)}${func['description_' + lang] || func.description
    || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>`}</div>${renderRelated(func, func.related)}`;
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

function renderLinkThis(func, classes) {
    return `<a class="linkThis" href="#${func.id}"><span class="material-icons">link</span></a>`;
}

function dangerousClass(func) {
    return func.dangerous ? 'dangerous' : (
        func.very_dangerous ? 'very-dangerous' : ''
    );
}

function dangerousIcon(func, forDangerousToo = false) {
    return func.dangerous
        ? (forDangerousToo
                ? '<span class="material-icons">warning</span>'
                : ''
        )
        : (func.very_dangerous
                ? '<span class="material-icons">error</span>'
                : ''
        );
}

function renderDangerousWarn(func) {
    if (!func.dangerous) return '';
    return `<div class="dangerous-warn">${dangerousIcon(func, true)} ${func.dangerous[lang === '' ? 'es' : lang]}</div>`;
}

function renderFunction(func, classes) {
    switch (func.type) {
        case 'operator':
            if (func.params.length === 2) {
                const param0 = func.params[0];
                const param1 = func.params[1];
                return `<div class="binary operator ${dangerousClass(func)}" id="${func.id}">
                            <span class="name">
                                ${dangerousIcon(func)}
                                ${renderType(param0.type, param0.is_ptr, classes)}
                                <span class="op">${escapeHtmlAndNameCorrection(func.name)}</span>
                                ${renderType(param1.type, param1.is_ptr, classes)}
                                ${addReturn(func, classes)}
                            </span>
                            ${renderDescription(func)}
                            ${renderLinkThis(func, classes)}
                        </div>`.replace(/\n\s*/g, '');
            } else {
                const param0 = func.params[0];
                return `<div class="unary operator ${dangerousClass(func)}" id="${func.id}">
                            <span class="name">
                                ${dangerousIcon(func)}
                                <span class="op">${escapeHtmlAndNameCorrection(func.name)}</span>
                                ${renderType(param0.type, param0.is_ptr, classes)}
                                ${addReturn(func, classes)}
                            </span>
                            ${renderDescription(func)}
                            ${renderLinkThis(func, classes)}
                        </div>`.replace(/\n\s*/g, '');
            }
        case 'property':
            return `<div class="property ${dangerousClass(func)}" id="${func.id}">
                        <span class="name">
                            ${dangerousIcon(func)}
                            ${renderType(func.of, func.of_ptr, classes)}
                            <span class="in">::</span>
                            <span class="prop">${escapeHtmlAndNameCorrection(func.name)}</span>
                            ${addReturn(func, classes)}
                        </span>
                        ${renderDescription(func)}
                        ${renderLinkThis(func, classes)}
                    </div>`.replace(/\n\s*/g, '')
        case 'method':
            if (func.of != null) {
                return `<div class="method ${dangerousClass(func)}" id="${func.id}">
                            <span class="name">
                                ${dangerousIcon(func)}
                                ${renderType(func.of, func.of_ptr, classes)}
                                <span class="in">::</span>
                                <span class="meth">${escapeHtmlAndNameCorrection(func.name)}</span>
                                <span class="par open">(</span>
                                ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,<wbr></span>')}
                                <span class="par close">)</span>
                                ${addReturn(func, classes)}
                            </span>
                            ${renderDescription(func)}
                            ${renderLinkThis(func, classes)}
                        </div>`.replace(/\n\s*/g, '')
            } else {
                return `<div class="method ${dangerousClass(func)}" id="${func.id}">
                            <span class="name">
                                ${dangerousIcon(func)}
                                <span class="meth">${escapeHtmlAndNameCorrection(func.name)}</span>
                                <span class="par open">(</span>
                                ${func.params.map(p => renderParam(p, classes)).join('<span class="sep">,<wbr></span>')}
                                <span class="par close">)</span>
                                ${addReturn(func, classes)}
                            </span>
                            ${renderDescription(func)}
                            ${renderLinkThis(func, classes)}
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
            if (a.type === b.type) {
                if (a.of === b.of) {
                    return a.name.localeCompare(b.name);
                } else if (a.of === null) {
                    return 1;
                } else if (b.of === null) {
                    return -1;
                } else {
                    return a.of - b.of;
                }
            } else return TYPES_ORDER[a.type] - TYPES_ORDER[b.type];
        } else if (a[groupBy] === null) return 1;
        else if (b[groupBy] === null) return -1;
        else return a[groupBy] - b[groupBy];
    });
}

function addTooltip(event) {
    const link = event.target;
    const reference = link.getAttribute('href').slice(1);
    const referred = THE_OBJ.funcs.find(f => f.id === reference)
        || THE_OBJ.classes.find(c => c.name === reference)
        || null;
    if (referred) {
        const html = referred["description_" + lang] || referred.description
            || TRANSLATE_TEXTS["no-desc-" + lang];
        const elem = document.createElement("div");
        elem.innerHTML = html;
        let text = elem.innerText;
        if (text.length > 100) {
            text = text.slice(0, 100);
            const indexNL = text.indexOf('\n');
            const indexDot = text.indexOf('.') + 1;
            index = indexDot > 0 ? indexDot : indexNL;
            const ellip = index > 0 && text[index - 1] === '.' ? ' [&hellip;]' : '&hellip;'
            text = `${index >= 0 ? text.slice(0, index) : text}${ellip}`;
        }
        if (!link.innerText.includes(referred.name)) {
            let name;
            if (referred.type === 'operator') {
                const param0 = referred.params.length === 2
                    ? typeForIdentifier(referred.params[0].type, referred.params[0].is_ptr, THE_OBJ.classes) + ' '
                    : '';
                const param1idx = referred.params.length === 2 ? 1 : 0;
                const param1 = typeForIdentifier(
                    referred.params[param1idx].type,
                    referred.params[param1idx].is_ptr,
                    THE_OBJ.classes);
                name = `${param0}${escapeHtmlAndNameCorrection(referred.name)}${param1}`;
            } else {
                const of = referred.of ? THE_OBJ.classes[referred.of].name + "::" : '';
                const params = referred.type === 'method' ? `(${referred.params.map(
                    p => typeForIdentifier(p.type, p.is_ptr, THE_OBJ.classes)
                ).join(", ")})` : '';
                name = `${of}${escapeHtmlAndNameCorrection(referred.name)}${params}`;
            }
            text = `<i>${name}:</i> ${text}`;
        }
        text = `${dangerousIcon(referred, true)} ${text}`;
        link.innerHTML += `<span class="tooltiptext ${dangerousClass(referred)}">${text}</span>`;
    }
    link.removeEventListener('pointerenter', addTooltip);
}

function render() {
    const t0 = performance.now();
    let html = "";
    let last_group = null;
    let last_type;
    let copy_classes = THE_OBJ.classes.slice();
    for (const func of THE_OBJ.funcs) {
        if (!filters.reduce((p, c) => p && c(func), true)) continue;
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
    // Avoid printing remaining classes if there is any filtering
    if (filters.length === 0) {
        for (const missing of copy_classes) {
            html += `</details><details class="class" id="${missing.name}" open><summary><h2>${
                missing.name
            }</h2></summary>`;
            html += `<p>${missing['description_' + lang] || missing.description
            || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>`}</p>`;
        }
    }
    html += "</details>";
    const main = document.getElementById('main');
    main.innerHTML = html;
    for (const link of main.querySelectorAll('a[href^="#"]:not(.linkThis)')) {
        link.addEventListener('pointerenter', addTooltip);
    }
    const t1 = performance.now();
    console.log("Rendered in", (t1 - t0), "ms.");
}

function nameFilter(text) {
    const lower = text.toLocaleLowerCase();
    return func => func.name.toLocaleLowerCase().includes(lower);
}

function filterToIds() {
    return THE_OBJ.funcs.filter(func => filters.reduce((p, c) => p && c(func), true)).map(f => f.id);
}

window.onload = function () {
    const lang_select = document.getElementById('lang_select');
    const groupByLabel = document.getElementById('group-by-label');
    const groupBySelect = document.getElementById('group-by-select');
    const searchInput = document.getElementById('search');
    const documented = document.getElementById('documented');
    let searchTimeout; // To debounce search

    function updateSelectText() {
        groupByLabel.innerText = TRANSLATE_TEXTS['group-by-' + lang];
        groupBySelect.options.item(0).innerText = TRANSLATE_TEXTS['gb-class-' + lang];
        groupBySelect.options.item(1).innerText = TRANSLATE_TEXTS['gb-return-' + lang];
        searchInput.setAttribute('placeholder', TRANSLATE_TEXTS['search-' + lang]);
    }

    function updateDocumented() {
        const nDocumented = THE_OBJ.funcs.filter(f => 'description' in f).length
            + THE_OBJ.funcs.filter(f => 'description_en' in f).length;
        const nTotal = 2 * THE_OBJ.funcs.length;
        documented.innerHTML = `${TRANSLATE_TEXTS['documented-' + lang]} ${Math.round(nDocumented / nTotal * 100)}%`;
    }

    lang_select.value = lang;
    lang_select.addEventListener('change', () => {
        lang = lang_select.value;
        location.replace((lang === 'en' ? '' : '?en') + location.hash);
        updateSelectText();
        updateDocumented();
        render();
    });
    groupBySelect.addEventListener('change', () => {
        groupBy = groupBySelect.value;
        sortFuncs();
        render();
    });
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (searchInput.value) {
                filters.splice(0, filters.length, nameFilter(searchInput.value));
            } else {
                filters.splice(0, filters.length);
            }
            render();
        }, 300);
    });

    THE_OBJ.funcs.forEach(f => {
        funcsById.set(f.id, f);
    });

    updateSelectText();
    updateDocumented();
    sortFuncs();
    render();
    // For links with hash to work after first render
    if (location.hash) {
        const elem = document.getElementById(location.hash.slice(1));
        if (elem) {
            setTimeout(elem.scrollIntoView.bind(elem));
            const main = document.getElementById('main');
            main.classList.add("one-remarked");
            elem.classList.add("remark");
            setTimeout(() => {
                main.classList.remove("one-remarked");
                elem.classList.remove("remark");
            }, 4100);
        }
    }
}
