document.addEventListener("DOMContentLoaded", boot);

function cssFunc(name, args) {
    return (
        name +
        "(" +
        args
            .map(function(a) {
                return a.toString();
            })
            .join(",") +
        ")"
    );
}

function pct(a) {
    return (a * 100).toString() + "%";
}

function pctpt(x, y) {
    return pct(x) + " " + pct(y);
}

function split(top, bottom) {
    return cssFunc("polygon", [
        pctpt(top, 0),
        pctpt(1, 0),
        pctpt(1, 1),
        pctpt(bottom, 1),
    ]);
}

function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

function boot() {
    // Prelude
    var $wrapper = document.getElementById("wrapper");
    var $bg = document.getElementById("bg");
    var $content = document.getElementById("content");

    // A subtle clue
    $bg.style.clipPath = split(randrange(0.3, 0.7), randrange(0.3, 0.7));
    $bg.style.backgroundColor = randomColor({});

    // Making the eye wander
    $content.style.top = pct(randrange(0.1, 0.5));
    $content.style.left = pct(randrange(0.2, 0.7));
}
