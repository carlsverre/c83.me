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

function deg(a) {
    return a.toString() + "deg";
}

function px(a) {
    return a.toString() + "px";
}

function randrange(min, max) {
    return Math.random() * (max - min) + min;
}

function boot() {
    // Prelude
    var $wrapper = document.getElementById("wrapper");
    var $bg = document.getElementById("bg");
    var $point = document.getElementById("point");

    function draw() {
        // A subtle clue
        $bg.style.transform = cssFunc("skew", [
            deg(randrange(0, 120)),
            deg(randrange(0, 120)),
        ]);
        $bg.style.webkitTransform = $bg.style.transform;
        $bg.style.backgroundColor = randomColor();

        // Making the eye wander
        var diameter = px(randrange(20, 70));
        $point.style.top = pct(randrange(0.1, 0.9));
        $point.style.left = pct(randrange(0.1, 0.9));
        $point.style.width = diameter;
        $point.style.height = diameter;
    }

    $point.addEventListener("click", draw);
    draw();

    console.log("This experience by https://www.carlsverre.com");
}

document.addEventListener("DOMContentLoaded", boot);
