
window.addEventListener("scroll",function(){
    document.querySelector(".bottom_hdr_menu").classList.toggle("sticky",scrollY > 0);
});