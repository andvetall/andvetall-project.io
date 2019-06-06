window.addEventListener("scroll", bringmenu);

function bringmenu() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector(".navigation").style.top = "-60%";
    } else {
        document.querySelector(".navigation").style.top = "30px";
    }
}
window.addEventListener("scroll", hidearrow);

function hidearrow() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.querySelector(".arrow").style.right = "20px";
    } else {
        document.querySelector(".arrow").style.right = "-50px";
    }
}


function vverh() {
    window.scrollBy(0,-40);
    window.pageYOffset > 0 ? requestAnimationFrame(vverh) :null
}
document.querySelector('.arrow').addEventListener('click', function(event) {
    event.preventDefault();
    vverh();
})


