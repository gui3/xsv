
function parseString (xsv, options) {
    /*let colsep = options.columnSeparator || "|";
    let rowsep = options.rowSeparator || ";";
    let strsep = options.stringSeparator || "\"";
    let cmdopen = options.commandOpen || "{";
    let cmdclose = options.commandClose || "}";

    const parsedArray = [];
    const buffer = "";
    const mode = "v"

    const strSize = xsv.length;
    let cur = 0;
    while (cur < strSize) {
        const char = xsv[cur];

        cur++;
    }*/

    const rows = xsv.split(";");
    const array2d = rows.map(row => row.split("|"));

    return array2d;
}

function toPreviewHtmlTable (document, xsv) {
    const array2d = parseString(xsv)

    const table = document.createElement("table")

    array2d.forEach(row => {
        const tr = document.createElement("tr")
        row.forEach(cell => {
            const td = document.createElement("td")

            td.appendChild(
                document.createTextNode(cell)
            )
            td.style.border = "1px solid #aaa"
            tr.appendChild(td)
        })
        table.appendChild(tr)
    })

    table.style.borderCollapse = "collapse"
    table.style.border = "2px solid #555"
    
    return table
}

const XSV = {
    parseString,
    toPreviewHtmlTable
}