require('./fixed-header.css')

let myTimeout
const SCROLL_ELT_HEIGHT = 100

function pageScroll() {
    let objDiv = document.getElementById("contain");
    if (objDiv.scrollTop < SCROLL_ELT_HEIGHT) {
        objDiv.scrollTop = SCROLL_ELT_HEIGHT
    }

    objDiv.scrollTop = objDiv.scrollTop + 1;
    if ((objDiv.scrollTop + SCROLL_ELT_HEIGHT) === objDiv.scrollHeight) {
        objDiv.scrollTop = 0;
    }
    myTimeout = setTimeout(pageScroll, 25);
}

function fitHeaderTableWidth(headerSel, scrollSel) {
    var colCount = 0;
    let items = document.querySelectorAll(`${scrollSel} tr:nth-child(1) td`)
    for(e of items) {
        let colspan = e.getAttribute('colspan')
        if (colspan) {
            colCount += colspan;
        } else {
            colCount++;
        }
    }

    for(var i = 1; i <= colCount; i++) {
        let e = document.querySelector(`${scrollSel} > tbody > tr:first-child > td:nth-child(${i})`)
        const thW = window.getComputedStyle(e).width
        let he = document.querySelector(`${headerSel} > thead th:nth-child(${i})`)
        he.style.width = thW
    }
}

function scrollTable() {
    pageScroll()
    fitHeaderTableWidth('#table_fixed','#table_scroll');

    let e = document.querySelector('#contain')

    e.addEventListener('mouseover', () => {
        clearTimeout(myTimeout)
    })

    e.addEventListener('mouseout', () => {
        pageScroll()
    })
}

window.addEventListener('DOMContentLoaded', scrollTable)
