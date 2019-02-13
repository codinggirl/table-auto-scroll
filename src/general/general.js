require('./general.css')

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

function scrollTable() {
    pageScroll()

    let e = document.querySelector('#contain')

    e.addEventListener('mouseover', () => {
        clearTimeout(myTimeout)
    })

    e.addEventListener('mouseout', () => {
        pageScroll()
    })
}

window.addEventListener('DOMContentLoaded', scrollTable)
