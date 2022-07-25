const img = document.querySelector(".artist-image");
const imgcol = document.querySelector(".image-column");
const foot = document.querySelector(".footer-box");

var pix = 0;

function check() {

    const imgrect =  img.getBoundingClientRect();
    const footrect = foot.getBoundingClientRect();

    if (footrect.top <= imgrect.bottom) {
        pix -= 1;
        img.style.transform = `translateY(${pix}px)`;
        check();
    } 
    else if (footrect.top >=  innerHeight){
        pix = 0;
        img.style.transform = `translateY(0px)`;
    }
}

function scroll() {
    
    check();
}

onscroll = scroll;