let blurBtn = document.querySelector(".blur");
blurBtn.addEventListener("click", () => {
    this.blur();
});

function rgb(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length < 2) { r = "0" + r }
    if (g.length < 2) { g = "0" + g }
    if (b.length < 2) { b = "0" + b }
    return "#" + r + g + b;
}
console.log(rgb(1, 2, 0));

function ababc(str, c) {
    for (let char of str) {
        if (c == char) {
            return 0;
        } else {
            return str.search(c);
        }
    }
}
console.log(ababc("ababc", "a")); //2
console.log(ababc("ababc", "c")); // 0
console.log(ababc("ababc", "d")); // -1