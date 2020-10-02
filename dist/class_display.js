window.onload = function () {
    const lang = location.search === '?en' ? 0 : 1;
    const className = decodeURIComponent(location.hash.substring(1));

    // Class select
    const classSelect = document.getElementById('class-select');
    const classSelectLabel = document.getElementById('class-select-label');
    classSelectLabel.innerText = ["Go to another class: ", "Ir a otra clase: "][lang];
    let selectHtml = "";
    const allClasses = Object.keys(CLASSES_DETAILS);
    allClasses.sort();
    for (const otherClass of allClasses) {
        selectHtml += `<option value='${otherClass}'${
            otherClass === className ? " selected" : ""
        }>${otherClass}</option>`;
    }
    classSelect.innerHTML = selectHtml;
    classSelect.addEventListener('change', () => {
        location.assign("#" + classSelect.value);
        location.reload();
    });

    // Rest
    const container = document.getElementById('class');
    if (location.hash === "" || location.hash === "#") {
        container.innerText = ["Please, specify a class", "Por favor, especifica una clase."][lang];
    } else {
        const inherited = ["Inherited from", "Heredado de"][lang];
        if (className) {
            const cmmds = commands(className);
            let commands_html = "";
            for (const [k, v] of Object.entries(cmmds)) {
                commands_html += (k === className ? '' : `<h3>${inherited} ${k}</h3>`)
                    + `<div class='details'>${Object.entries(v).map(([command, params]) =>
                        `<div><span class="meth">${command}</span>(<wbr>${params.slice(1).map(([t, n]) =>
                            `${n}: <span class='type'>${t}</span>`).join(", ")
                        })</div>`).join("\n")
                    }</div>`;
            }
            const properties_html = Object.entries(properties(className)).map(([cls, props]) =>
                (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
                + `<div class='details'>${Object.entries(props).map(([prop, val]) =>
                    `<div><span class='prop-key'>${prop}</span>: <span class='prop-value'>"${val}"</span></div>`).join("\n")}</div>`
            ).join("\n");
            const cmd = ["Commands", "Comandos"][lang];
            const prp = ["Properties", "Propiedades"][lang];
            container.innerHTML = `<h1><span class="class-route">${route(className).map(
                cls => `<a href='#${cls}' onclick='setTimeout(() => location.reload())'>${cls}</a>`
                ).join("&nbsp;/ ")}&nbsp;/</span><br>${className}</h1>`
                + `<details class="class-details" open><summary><h2>${cmd}</h2></summary>${commands_html}</details> `
                + `<details class="class-details" open><summary><h2>${prp}</h2></summary>${properties_html}</details> `;
        } else {
            container.innerText = ["Class not found.", "Clase no encontrada"][lang];
        }
    }
}