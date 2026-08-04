var interval = null;
function highlightGlossaryWord(glossaryNum) {
    var id = "glossary-" + glossaryNum;
    var word = document.getElementById(id);
    var value = 0;

    word.style.borderRadius = "5px";

    clearInterval(interval);
    interval = setInterval(playAnimation, 6);
    function playAnimation() {
        if (value > 238) {
            word.removeAttribute("style");
            clearInterval(interval);
        } else {
            word.style.backgroundColor = `rgb(${value}, ${value}, ${value}`;
            value++;
        }
    }
}
