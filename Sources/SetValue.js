function insertNewData() {
    const emeraldValues = []
    const emeraldClasses = []
    const otherValues = []
    const otherClasses = []

    if (emeraldValues.length > 0 || emeraldClasses.length > 0 || otherValues.length > 0 || otherClasses.length > 0) {
        // Collect all elements with the data-index attribute
        const elements = document.querySelectorAll('[data-index]');

        // Shuffle the otherValues while keeping emerald elements in place
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(otherValues);

        // Update elements with shuffled values and restore classes
        elements.forEach(el => {
            const index = el.dataset.index;
            const emeraldElement = emeraldClasses.find(e => e.index === index);
            const otherElement = otherClasses.find(e => e.index === index);

            if (emeraldElement) {
                el.querySelector('.truncate').innerText = emeraldElement.text;
                el.className = emeraldElement.classes;
            } else if (otherElement) {
                el.querySelector('.truncate').innerText = otherValues.shift();
                el.className = otherElement.classes;
            }
        });
    }
}

insertNewData()
