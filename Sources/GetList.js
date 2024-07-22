
function getAllKeyword() {
    const elements = document.querySelectorAll('[data-index]');

    const emeraldElements = [];
    const otherElements = [];

    const emeraldValues = [];
    const emeraldClasses = [];
    const otherValues = [];
    const otherClasses = [];

    elements.forEach(el => {
        const text = el.querySelector('.truncate').innerText;
        const classes = el.className;
        const index = el.dataset.index;

        if (el.classList.contains('border-emerald-400') && el.classList.contains('text-emerald-400')) {
            emeraldElements.push({ index, text, classes });
            emeraldValues.push(text);
            emeraldClasses.push(classes);
        } else {
            otherElements.push({ index, text, classes });
            otherValues.push(text);
            otherClasses.push(classes);
        }
    });

    console.log("otherElements :", otherElements);
    console.log("otherValues :", otherValues);
    console.log("emeraldElements :", emeraldElements);
    console.log("emeraldValues :", emeraldValues);
}
getAllKeyword()