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
    const lang = location.search === '?en' ? 0 : 1;
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
    const examples = await getExamples();
    select.addEventListener('change', () => loadExample.call(select, holder, select.selectedOptions[0].value));
    onlyLang.addEventListener('change', onlyLangChanged.bind(onlyLang, select, holder, examples, lang));
    onlyLang.click();
    loadExample(holder, select.value);
}

