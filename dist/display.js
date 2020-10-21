let lang = location.search === '?en' ? 'en' : '';
let groupBy = 'of';
const filters = [];
const funcsById = new Map();

window.Prism = window.Prism || {};
Prism.manual = true;

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
    "documented-en": "Documented: ",
    "not-for-seqs-": "Inútil en secuencias del editor de mapas.",
    "not-for-seqs-en": "Useless for sequences in the map editor.",
    "research-notes-": "Investigación requerida, notas:",
    "research-notes-en": "Research required, research notes (Spanish):",
    "unknown-param-": "ignoto",
    "unknown-param-en": "unknown",
    "shortkeys-": "Atajos de teclado",
    "shortkeys-en": "Keyboard shortcuts"
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
    return `<wbr><span class="param"><span class="name">${
        param.name !== "number" ? escapeHtmlAndNameCorrection(param['name_' + lang] || param.name) : TRANSLATE_TEXTS['unknown-param-' + lang]
    }</span><span class="two_dots mid">:</span>${renderType(param.type, param.is_ptr, classes)}</span>`
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

function renderNotForSequences(func) {
    if (func.notForSequences) {
        return `<div class="not-for-seqs"><span>${TRANSLATE_TEXTS["not-for-seqs-" + lang]}</span><span class="material-icons">description</span></div>`;
    } else return '';
}

function renderResearchNotes(func) {
    if (func.research_needed) {
        return `<div class='research-notes'><div class='research-notes-title'><span>${TRANSLATE_TEXTS["research-notes-" + lang]}</span><span class="material-icons">biotech</span></div><div class="research-notes-content">${func.research_needed}</div></div>`;
    } else return '';
}

function renderDescription(func) {
    return `${renderNotForSequences(func)}<div class="description">${renderDangerousWarn(func)}${func['description_' + lang] || func.description
    || `<span class=\"to-fill\">${TRANSLATE_TEXTS['no-desc-' + lang]}</span>${renderResearchNotes(func)}`}</div>${renderRelated(func, func.related)}`;
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
    main.querySelectorAll('pre')
        .forEach(pre => Prism.highlightElement(pre));
    main.querySelectorAll('tt.language-cks')
        .forEach(tt => Prism.highlightElement(tt));
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

function isElementVisible(el, topBias = 100) {
    const {top: elemTop, bottom: elemBottom} = el.getBoundingClientRect();
    return elemTop < window.innerHeight && elemBottom >= topBias;
}

function getCurrentlyVisibleIdx(elems) {
    for (let i = 0; i < elems.length; i++) {
        const el = elems.item(i);
        if (isElementVisible(el)) {
            return i;
        }
    }
    return -1;
}

/**
 * @param elems
 * @param {'up'|'down'} upOrDown
 * @param {boolean} loop
 */
function next(elems, upOrDown, loop = false) {
    let other = 0;
    const current = getCurrentlyVisibleIdx(elems);
    if (current > -1) {
        other = upOrDown === 'up' ? current - 1 : current + 1;
        if (other < 0 || other >= elems.length) {
            if (loop) {
                other = (other + elems.length) % elems.length;
            } else {
                return;
            }
        }
    }
    elems[other].scrollIntoView({block: "start", behavior: "smooth"});
}

const moveDetails = (upOrDown) => next(
    document.getElementsByTagName('details'), upOrDown);
const moveFunc = (upOrDown) => next(
    document.querySelectorAll('div.operator,div.method,div.property'), upOrDown);
const nextResearchNote = () => next(document.querySelectorAll('div.research-notes'), 'down', true);

/**
 * @param {boolean} all
 * @param {'expand'|'collapse'|null} expansion
 */
function toggleDetailsExp(all, expansion = null) {
    const freeToggle = expansion === null;
    const shouldOpen = expansion === 'expand';
    /** @type {HTMLCollectionOf<HTMLDetailsElement>} */
    const details = document.getElementsByTagName('details');
    if (all) {
        for (const elem of details) {
            elem.open = freeToggle ? !elem.open : shouldOpen;
        }
    } else {
        let curr = getCurrentlyVisibleIdx(details);
        if (curr < 0) return;
        while (!freeToggle && details[curr].open === shouldOpen) {
            curr++;
            if (curr >= details.length || !isElementVisible(details[curr])) {
                return;
            }
        }
        details[curr].open = freeToggle ? !details[curr].open : shouldOpen;
    }
}

function renderShortkey(shortkey, useAlt, description) {
    return `<div class='shortkey'>
<span class="keys">
    <span class='key'>Shift</span> +
${useAlt ? '    <span class="key">Alt</span> +' : ''}
    <span class='key'>${shortkey.display}</span>
    </span>
    <span class="shortkey-desc">${description[lang || 'es']}</span>
</div>`;
}


window.onload = function () {
    const lang_select = document.getElementById('lang_select');
    const groupByLabel = document.getElementById('group-by-label');
    const groupBySelect = document.getElementById('group-by-select');
    /** @type {HTMLInputElement} */
    const searchInput = document.getElementById('search');
    const documented = document.getElementById('documented');
    const shortkeysSum = document.getElementById('shortkeys-summary');
    const shortkeysCont = document.getElementById('shortkeys-content');
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
        documented.innerHTML = `${TRANSLATE_TEXTS['documented-' + lang]} ${Math.round(nDocumented / nTotal * 100)}% (${Math.floor(nDocumented / 2)})`;
    }

    const SHORT_KEYS = {
        'KeyF': {
            display: 'F',
            describe: {
                'es': 'Seleccionar el cuadro de filtrar por nombre',
                'en': 'Select the name-filtering input field'
            },
            do: () => {
                searchInput.focus();
                searchInput.setSelectionRange(0, searchInput.value.length);
            }
        },
        'KeyR': {
            display: 'R',
            describe: {
                'es': 'Agrupar por tipo de retorno',
                'en': 'Group by return type'
            },
            do: () => {
                groupBySelect.value = 'returns';
                groupBySelect.dispatchEvent(new Event('change'));
            }
        },
        'KeyC': {
            display: 'C',
            describe: {
                'es': 'Agrupar por clase',
                'en': 'Group by class'
            },
            do: () => {
                groupBySelect.value = 'of';
                groupBySelect.dispatchEvent(new Event('change'));
            }
        },
        'PageUp': {
            display: 'Pag<span class="material-icons">keyboard_arrow_up</span>',
            describe: {
                'es': 'Grupo previo',
                'en': 'Previous group'
            },
            do: () => moveDetails('up')
        },
        'PageDown': {
            display: 'Pag<span class="material-icons">keyboard_arrow_down</span>',
            describe: {
                'es': 'Siguiente grupo',
                'en': 'Next group'
            },
            do: () => moveDetails('down')
        },
        'ArrowUp': {
            display: '<span class="material-icons">keyboard_arrow_up</span>',
            describe: {
                'es': 'Función siguiente',
                'en': 'Next function'
            },
            do: () => moveFunc('up')
        },
        'ArrowDown': {
            display: '<span class="material-icons">keyboard_arrow_down</span>',
            describe: {
                'es': 'Función previa',
                'en': 'Previous function'
            },
            do: () => moveFunc('down')
        },
        'KeyN': {
            display: 'N',
            describe: {
                'es': 'Siguiente "investigación requerida" (cíclico)',
                'en': 'Next "required research" (cyclic)'
            },
            do: () => nextResearchNote()
        },
        'NumpadAdd': 'BracketRight',
        'BracketRight': {
            display: '+',
            describe: {
                'es': 'Expandir grupo',
                'en': 'Expand group'
            },
            withAlt: {
                'es': 'Expandir todo',
                'en': 'Expand all'
            },
            do: event => toggleDetailsExp(event.altKey, 'expand')
        },
        'NumpadSubtract': 'Slash',
        'Slash': {
            display: '-',
            describe: {
                'es': 'Colapsar grupo',
                'en': 'Collapse group'
            },
            withAlt: {
                'es': 'Colapsar todo',
                'en': 'Collapse all'
            },
            do: event => toggleDetailsExp(event.altKey, 'collapse')
        }
    };
    document.addEventListener('keyup', event => {
        if (event.shiftKey) {
            let shortKey = SHORT_KEYS[event.code];
            while ((typeof shortKey) === 'string') {
                shortKey = SHORT_KEYS[shortKey];
            }
            if (shortKey && 'do' in shortKey) {
                shortKey.do(event);
                event.stopPropagation();
                event.preventDefault();
            }
        }
    });

    function updateShortkeys() {
        shortkeysSum.innerHTML = TRANSLATE_TEXTS['shortkeys-' + lang];
        shortkeysCont.innerHTML = Object.values(SHORT_KEYS)
            .filter(sk => (typeof sk) === 'object')
            .map(sk =>
                renderShortkey(sk, false, sk.describe)
                + (sk.withAlt ? renderShortkey(sk, true, sk.withAlt) : '')
            ).join('');
    }

    lang_select.value = lang;
    lang_select.addEventListener('change', () => {
        location.replace((lang === 'en' ? '' : '?en') + location.hash);
        lang = lang_select.value;
        updateSelectText();
        updateDocumented();
        updateShortkeys();
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
    searchInput.addEventListener('keyup', event => {
        event.stopPropagation();
        if (event.code === 'Escape') searchInput.blur();
    });

    THE_OBJ.funcs.forEach(f => {
        funcsById.set(f.id, f);
    });

    Prism.languages.cks = Prism.languages.extend('clike', {
        'keyword': new RegExp(`\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue|${
            THE_OBJ.classes.map(cl => cl.name).join("|")
        })\\b`),
    });

    updateSelectText();
    updateDocumented();
    updateShortkeys();
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
