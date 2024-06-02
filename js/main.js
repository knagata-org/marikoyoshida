/////////////////////////////////
//////////// ON LOAD ////////////
/////////////////////////////////
$(document).ready(function () {
    ////////// WINDOW SETTING //////////
    checkAspect();

    var onAnimationElm = document.querySelectorAll('.on_fade');
    // console.log(onAnimationElm);
    for (var i = 0; i < onAnimationElm.length; i++) {
        onAnimationElm[i].classList.add('on');
    }
});

////////////////////////////////
///////// RESIZE EVENT /////////
////////////////////////////////
const checkAspect = () => {
    //SIZE
    var dw = window.innerWidth;
    var dh = window.innerHeight;
    console.log(dw + ' x ' + dh);

    const pics = document.getElementsByClassName("carousel-img");
    for (var i = 0; i < pics.length; i++) {
        const w = pics[i].naturalWidth;
        const h = pics[i].naturalHeight;
        if(dw/dh > w/h){
            pics[i].style.setProperty('width', dw+"px");
            pics[i].style.setProperty('height', "auto");
            pics[i].style.setProperty('top', (dh-dw*h/w)/2+"px");
            pics[i].style.setProperty('left', "auto");
        }else{
            pics[i].style.setProperty('width', "auto");
            pics[i].style.setProperty('height', dh+"px");
            pics[i].style.setProperty('top', "auto");
        pics[i].style.setProperty('left', (dw-dh*w/h)/2+"px");
        }
    }

    const root = document.querySelector(':root');
    root.style.setProperty('--window-width', dw);
}
window.addEventListener('resize', checkAspect);
window.addEventListener("orientationchange", checkAspect);

$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_fade');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});