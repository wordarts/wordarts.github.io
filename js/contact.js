const foot = document.querySelector(".footer-box");
const rect = foot.getBoundingClientRect();
const bottom = rect.bottom;

console.log(bottom);

function fixNav() {
    if (window.innerHeight - bottom > 0) {
        foot.style.position = "absolute";
        foot.style.bottom = 0;
    } else {
        foot.style.position = "relative";
    }
}

window.onresize = fixNav;
fixNav();