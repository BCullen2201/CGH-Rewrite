var interval = null;
function highlightGlossaryWord(glossaryNum) {
    var id = "glossary-" + glossaryNum;
    var word = document.getElementById(id);
    var value = 0;
    var i = 0;

    clearInterval(interval);
    interval = setInterval(frame, 25);
    function frame() {
        if (value >= 1) {
            clearInterval(interval);
        } else {
            if (i % 5 == 0) { // If the underlining blinks too quick, it looks weird
                word.style.textDecoration = "underline";
            } else {
                word.style.textDecoration = "none";
            }
            word.style.opacity = value;
            value = value + 0.02;
        }
        i++;
    }

    word.style.opacity = 1;
}
