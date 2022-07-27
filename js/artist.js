const img = document.querySelector(".artist-image");
const imgcol = document.querySelector(".image-column");
const foot = document.querySelector(".footer-box");

var pix = 0;
var on = false;
var end;

function check() {

    const imgrect =  img.getBoundingClientRect();
    const footrect = foot.getBoundingClientRect();

    if (footrect.top <= imgrect.bottom) {
        img.classList.remove("transition");
        pix -= 1;
        img.style.transform = `translateY(${pix}px)`;
        check();
    } 
    if (footrect.top > innerHeight && on){
        pix = 0;
        on = false;
        img.classList.add("transition");
        // img.style.transform = `translateY(0px)`;
        end = setTimeout(recalibrate, 2000);
    }
    if (footrect.top < innerHeight && !on) {
        on = true;
    }
}

function recalibrate() {

    img.style.transform = `translateY(${pix}px)`;
    clearTimeout(end);
}

function scroll() {
    
    check();
}

onscroll = scroll;