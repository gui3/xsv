
const xsvInput = document.getElementById(
    "xsv-input"
)
const xsvPreview = document.getElementById(
    "xsv-preview"
)

xsvInput.addEventListener("input", (e) => {
    preview(xsvInput.value)
})

function preview (dataXsv) {
    console.log(dataXsv)
    const htmlTable = XSV.toPreviewHtmlTable(document, dataXsv)
    clearElement(xsvPreview)
    xsvPreview.appendChild(htmlTable)
}

function clearElement (element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

window.onload = () => {
    preview(xsvInput.value)
}