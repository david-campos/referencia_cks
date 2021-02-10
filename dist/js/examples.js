/** @type {HTMLDivElement|null} */
let methodInfo = null;
const lang = location.search === '?en' ? 0 : 1;

const getExamples = (function () {
    let examples = null;
    let examplesError = null;
    let examplesLoadedFunc = null;
    let examplesErrorFunc = null;

    fetch('examples/examples.json')
        .then(async data => examplesLoaded(await data.json()))
        .catch(err => examplesNotLoaded(err));

    function examplesLoaded(data) {
        examples = data['examples'];
        if (examplesLoadedFunc) examplesLoadedFunc(examples.slice());
    }

    function examplesNotLoaded(err) {
        examplesError = err;
        if (examplesErrorFunc) examplesErrorFunc(err);
    }

    return function () {
        return new Promise((res, rej) => {
            if (examples !== null) res(examples.slice());
            else if (examplesError) rej(examplesError);
            else {
                examplesLoadedFunc = res;
                examplesErrorFunc = rej;
            }
        });
    }
})();

/**
 * @return {HTMLOptionElement}
 */
function createExampleOption(example) {
    const option = document.createElement('option');
    option.value = 'examples/' + example.file;
    option.innerText = example.example;
    return option;
}

/**
 * @param {HTMLSelectElement} select
 * @param {any[]} examples
 */
function fillExampleOptions(select, examples) {
    select.innerHTML = "";
    select.append(...examples.map(createExampleOption));
}

function renderParam(param) {
    return `${param[['name_en', 'name'][lang]]}: ${renderType(param.type, param.is_ptr)}`
}

function renderParams(f) {
    if (!f.params || f.params.length === 0)
        return '';
    return `(${f.params.map(renderParam).join(", ")})`;
}

function renderType(of, ofPtr) {
    const type = THE_OBJ.classes[of];
    if (!type) return '';
    return `<a class='type' href='./#${type.name}' target="_blank">${escapeHtmlAndNameCorrection(type.name)}${ofPtr ? '*' : ''}</a>`;
}

function renderOf(f) {
    return f.of !== null ? `${renderType(f.of, f.of_ptr)}::` : '';
}

function renderFunctionOrOperator(f) {
    const name = escapeHtmlAndNameCorrection(f.name);
    const returnStr = `: ${renderType(f.returns, f.returns_ptr)}`;
    switch (f.type) {
        case 'method':
        case 'property':
            return `${renderOf(f)}${name}${renderParams(f)}${returnStr}`;
        case 'operator':
            if (f.params.length === 1)
                return `${renderOf(f)}${name}${renderType(f.params[0].type, false)}${returnStr}`;
            else
                return `${renderType(f.params[0].type, false)} ${name} ${renderType(f.params[1].type, false)}${returnStr}`;
    }
    return '';
}

function renderAnnotations(f) {
    return '';
}

/**
 * @this {HTMLSpanElement} - The clicked element
 * @param {MouseEvent} event
 */
function onClick(event) {
    event.stopPropagation();
    if (!methodInfo)
        return;
    methodInfo.classList.replace('hidden', 'shown');
    const funcName = this.innerText;
    if (this.classList.contains('type')) {
        const type = THE_OBJ.classes.find(c => c.name === funcName);
        if (type) {
            methodInfo.innerHTML = `<div>
<h2 class="function-title">${type.name}</h2>
<p class="function-description">${
                type[['description_en', 'description'][lang]]
                || type.description
                || ["Not documented yet.", "Todavía sin documentar."][lang]
            }</p></div>`
        }
    } else {
        const prev = this.previousElementSibling;
        const filterOf = this.classList.contains('operator')
            ? () => true
            : (prev && prev.classList.contains('punctuation') && prev.innerHTML === '.'
                ? f => f.of !== null : f => f.of === null);
        const type = this.classList.contains('cks-method')
            ? 'method'
            : (this.classList.contains('cks-property') ? 'property' : 'operator');
        methodInfo.innerHTML = THE_OBJ.funcs
            .filter(filterOf)
            .filter(f => nameCorrection(f.name) === funcName && f.type === type)
            .map(f => `<div>
<h2 class="function-title">${renderFunctionOrOperator(f)}</h2>
${renderAnnotations(f)}
<p class="function-description">${f[['description_en', 'description'][lang]] || f.description || ["Not documented yet.", "Todavía sin documentar."][lang]}</p>
</div>`
            ).join("\n");
    }
    methodInfo.querySelectorAll('.language-cks').forEach(elem => Prism.highlightElement(elem));
}

/**
 * @param {HTMLElement} holder
 * @param {string} exampleUrl
 * @return {Promise<void>}
 */
async function loadExample(holder, exampleUrl) {
    if (!exampleUrl || !holder)
        return;
    holder.innerHTML = "...";
    const response = await fetch(exampleUrl);
    holder.innerHTML = await response.text();
    Prism.highlightElement(holder);
    holder.querySelectorAll('.cks-property,.cks-method,.operator,.token.type')
        .forEach(span => span.addEventListener('click', onClick.bind(span)));
}

function onlyLangChanged(select, holder, examples, lang) {
    const selectedValue = select.selectedOptions.length > 0 ? select.selectedOptions[0].value : null;
    if (this.checked) {
        const filter = lang === 0
            ? example => example.lang === 'en'
            : example => example.lang === 'es';
        fillExampleOptions(select, examples.filter(filter));
    } else {
        fillExampleOptions(select, examples);
    }
    let toLoad = [...select.options].find(opt => opt.value === selectedValue) || select.options[0];
    if (toLoad) select.value = toLoad.value;
    if (select.value !== selectedValue) loadExample(holder, select.value);
}

window.onload = async () => {
    setupPrism();
    const back = document.getElementById('back');
    back.innerText = [
        "Click here to go back to the main page",
        "Haz click aquí para volver a la página principal"
    ][lang];
    const selectLabel = document.getElementById('select-label');
    selectLabel.innerText = ["Example: ", "Ejemplo: "][lang];
    const onlyLangLabel = document.getElementById('only-lang-label');
    onlyLangLabel.innerText = [" Only in English", " Solo en español"][lang];
    /** @type {HTMLSelectElement} */
    const select = document.getElementById('example-select');
    const holder = document.getElementById('code-holder');
    /** @type {HTMLInputElement} */
    const onlyLang = document.getElementById('only-lang');
    methodInfo = document.getElementById('method-info');
    const examples = await getExamples();
    holder.parentElement.addEventListener('click',
        () => methodInfo.classList.replace('shown', 'hidden')
    );
    select.addEventListener('change', () => loadExample.call(select, holder, select.selectedOptions[0].value));
    onlyLang.addEventListener('change', onlyLangChanged.bind(onlyLang, select, holder, examples, lang));
    onlyLang.click();
    loadExample(holder, select.value);
}

