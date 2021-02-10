function escapeHtmlAndNameCorrection(unsafe) {
    return unsafe
        .replace(/&|\\a/g, "&amp;")
        .replace(/<|\\l/g, "&lt;")
        .replace(/>|\\g/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function nameCorrection(name) {
    return name
        .replace(/\\a/g, "&")
        .replace(/\\l/g, "<")
        .replace(/\\g/g, ">");
}
