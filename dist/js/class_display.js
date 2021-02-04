function getClassFromHash() {
    if (location.hash === "" || location.hash === "#") {
        return "";
    }
    const hashPointIdx = location.hash.indexOf(".");
    const hashClass = hashPointIdx >= 0
        ? location.hash.substring(1, hashPointIdx)
        : location.hash.substr(1);
    return decodeURIComponent(hashClass);
}

function getRemarkedFromHash() {
    const hashPointIdx = location.hash.indexOf(".");
    const remarked = hashPointIdx >= 0
        ? location.hash.substr(hashPointIdx + 1)
        : null;
    return remarked ? decodeURIComponent(remarked) : null;
}

function remark(labels) {
    document.querySelectorAll(`[data-label]`)
        .forEach(el => el.classList.remove("selected"));
    if (labels) {
        location.replace(`#${getClassFromHash()}.${encodeURIComponent(labels)}`);
        const scrollTo = labels.split(",").map(l => l.trim()).map(label => {
            document.querySelectorAll(`[data-label="${label}"]`)
                .forEach(el => el.classList.add("selected"));
            return document.querySelectorAll(`div[data-label="${label}"]`).item(0);
        }).reduce((p, c) => p.offsetTop > c.offsetTop ? c : p);
        if (scrollTo) {
            scrollTo.parentElement.parentElement.setAttribute("open", "1");
            scrollTo.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    } else {
        location.replace(`#${getClassFromHash()}`);
    }
}

window.onload = function () {
    const lang = location.search === '?en' ? 0 : 1;
    const className = getClassFromHash();
    if (!(className in CLASSES_DETAILS)) {
        const remarked = getRemarkedFromHash();
        location.replace(`${location.query || ''}#Object${remarked ? `.${remarked}` : ''}`);
        window.onload(null);
        return;
    }

    // Class select
    const classSelect = document.getElementById('class-select');
    const classSelectLabel = document.getElementById('class-select-label');
    classSelectLabel.innerText = ["Go to another class: ", "Ir a otra clase: "][lang];
    let selectHtml = '';
    const allClasses = Object.keys(CLASSES_DETAILS);
    allClasses.sort();
    for (const otherClass of allClasses) {
        selectHtml += `<option value='${otherClass}'${
            otherClass === className ? " selected" : ""
        }>${otherClass}</option>`;
    }
    classSelect.innerHTML = selectHtml;
    classSelect.addEventListener('change', () => {
        const remarked = getRemarkedFromHash();
        location.replace(`${location.query || ''}#${classSelect.value}${remarked ? `.${remarked}` : ''}`);
        window.onload(null);
    });

    // Rest
    const container = document.getElementById('class');
    const inherited = ["Inherited from", "Heredado de"][lang];
    if (className) {
        const commands_html = Object.entries(commands(className)).map(([cls, defCmds]) =>
            (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
            + `<div class='details'>${
                Object.keys(defCmds)
                    .map(cmd => [cmd, CLASSES_DETAILS_CMDS[cmd]])
                    .map(([cmd, cmdObj]) =>
                        `<div data-label="${cmd}">${
                            cmdObj.rollover ? `<span class="rollover">${cmdObj.rollover}</span>` : ''
                        }<span class="meth">${cmd}</span>(<wbr>${cmdObj.targets.map(t =>
                            `<span class='type'>${t !== '' ? t : 'point'}</span>`).join(" | ")
                        })${cmdObj.description ? `: ${cmdObj.description}` : ''}</div>`
                    ).join("\n")
            }</div>`
        ).join("");
        const defcommands_html = Object.entries(defaultCmds(className)).map(([cls, defCmds]) =>
            (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
            + `<div class='details'>${Object.entries(defCmds).map(([target, cmds]) =>
                `<div><span class='def-cmd-tgt'>${target !== ''
                    ? target : ['No target', 'Sin objetivo'][lang]
                }</span>: ${cmds.map(cmd =>
                    `<span class='def-cmd-cmd' data-label="${cmd.cmd}"
                        title="${["Click to remark associated command / method", "Click para remarcar el método / comando asociado"][lang]}"
                        onclick="remark(this.getAttribute('data-label'))">${cmd.cmd + (cmd.ctrl ? '*' : '')}</span>`
                ).join(", ")}</div>`
            ).join("")}</div>`
        ).join("\n");
        const properties_html = Object.entries(properties(className)).map(([cls, props]) =>
            (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
            + `<div class='details'>${Object.entries(props).map(([prop, val]) =>
                `<div data-label="${prop}"><span class='prop-key'>${prop}</span>: <span class='prop-value'>"${val}"</span></div>`).join("\n")}</div>`
        ).join("\n");
        const childrenNodes = Object.entries(CLASSES_DETAILS)
            .filter(([_, node]) => node.parent === className)
            .map(([childName]) => childName);
        childrenNodes.sort();
        const children_html = `<div class='details'>${childrenNodes.map(
            childName => `<a href="#${childName}" data-label="${childName}" onclick="setTimeout(() => location.reload())">${childName}</a>`
        ).join("")}</div>`;
        const methds = methods(className);
        let methods_html = "";
        for (const [k, v] of Object.entries(methds)) {
            methods_html += (k === className ? '' : `<h3>${inherited} ${k}</h3>`)
                + `<div class='details'>${Object.entries(v).map(([mtd, params]) =>
                    `<div data-label="${mtd}"><span class="meth">${mtd}</span>(<wbr>${params.slice(1).map(([t, n]) =>
                        `${n}: <span class='type'>${t}</span>`).join(", ")
                    })</div>`).join("\n")
                }</div>`;
        }
        const classStates = states(className);
        const states_html = Object.entries(classStates).map(([cls, stts]) =>
            (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
            + `<div class='details'>${Object.entries(stts).map(([idx, state]) => {
                const texts = [];
                if (state.anim_idx) texts.push(`<span>animation ${state.anim_idx}</span>`);
                if (state.anim_frame) texts.push(`<span>frame ${state.anim_frame}</span>`);
                return `<div data-label="${state.name}"><span class='state-idx'>${idx}</span>. <span class='state-name'>${state.name}</span>${
                    texts.length > 0 ? `: ${texts.join(', ')}` : ''
                }</div>`;
            }).join("")}</div>`
        ).join("");
        const anims_html = Object.entries(animations(className)).map(([cls, anims]) =>
            (cls === className ? '' : `<h3>${inherited} ${cls}</h3>`)
            + `<div class='details'>${Object.entries(anims).map(([idx, anim]) =>
            `<div data-label="${anim.name}"><span class='anim-idx'>${idx}</span>. <span class='anim-name'>${anim.name}</span>`
            + `(<span class='anim-duration'>${anim.duration}</span>ms): `
            + `state <span class='anim-start'>${anim.startstate}</span> to <span class='anim-end'>${anim.endstate}</span></div>`
            ).join("")}</div>`
        ).join("");
        const type = ["Type", "Tipo"][lang];
        const points = CLASSES_DETAILS[className].points;
        const points_html = points ?
            Object.values(points).map(pt => pt.type).filter((t, i, a) => a.indexOf(t) === i).map(t =>
                `<div class="details" data-label="point-type-${t}"><h3 class="point-type-title">${type} ${t}</h3>${
                    Object.entries(points).filter(([idx, pt]) => pt.type === t).map(([idx, pt]) =>
                        `<div data-label="point"><span class="point-idx">${idx}</span>. `
                        + `(<span class="point-coord">${pt.x}</span>, <span class="point-coord">${pt.y}</span>)</div>`
                    ).join('')
                }</div>`
            ).join('')
            : '';
        const mtd = ["Methods", "Métodos"][lang];
        const cmd = ["Commands", "Comandos"][lang];
        const defcmd = ["Default commands", "Comandos por defecto"][lang];
        const prp = ["Properties", "Propiedades"][lang];
        const children = ["Direct children", "Hijos directos"][lang];
        const sts = ["States", "Estados"][lang];
        const anm = ["Animations", "Animaciones"][lang];
        const pts = ["Points", "Puntos"][lang];
        container.innerHTML = `<h1><span class="class-route">${route(className).map(
            cls => `<a href='#${cls}' onclick='setTimeout(() => location.reload())'>${cls}</a>`
            ).join("&nbsp;/ ")}&nbsp;/</span><br>${className}</h1>`
            + (childrenNodes.length > 0 ? `<details class="class-details"><summary><h2>${children}</h2></summary>${children_html}</details>` : '')
            + (properties_html.length > 0 ? `<details class="class-details" open><summary><h2>${prp}</h2></summary>${properties_html}</details>` : '')
            + (commands_html.length > 0 ? `<details class="class-details" open><summary><h2>${cmd}</h2></summary>${commands_html}</details>` : '')
            + (defcommands_html.length > 0 ? `<details class="class-details"><summary><h2>${defcmd}</h2></summary><p>${
                ["* = with control key", "* = con tecla control"][lang]}</p>${defcommands_html}</details>` : '')
            + (methods_html.length > 0 ? `<details class="class-details"><summary><h2>${mtd}</h2></summary>${methods_html}</details>` : '')
            + (states_html.length > 0 ? `<details class="class-details"><summary><h2>${sts}</h2></summary>${states_html}</details>` : '')
            + (anims_html.length > 0 ? `<details class="class-details"><summary><h2>${anm}</h2></summary>${anims_html}</details>` : '')
            + (points_html.length > 0 ? `<details class="class-details"><summary><h2>${pts}</h2></summary>${points_html}</details>` : '')
        ;
        remark(getRemarkedFromHash());
    } else {
        container.innerText = ["Class not found.", "Clase no encontrada"][lang];
    }
}
