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

    ////////// URL PRAMETERS //////////
    //set english as default
    // var pageselem = document.querySelector(".pages");
    // var pageelem = Array.from(document.querySelectorAll(".page"));
    // var listitems = document.querySelectorAll(".menulist")[2];
    // var translateitem = listitems.querySelector("#translate");
    // translateitem.checked = true;
    var jaelem = Array.from(document.getElementsByClassName("ja"));
    var enelem = Array.from(document.getElementsByClassName("en"));
    var navja = document.getElementsByClassName("lang-ja")[0];
    var naven = document.getElementsByClassName("lang-en")[0];
    // console.log(boldweight);
    // jaelem.forEach(element => {
    //     element.setAttribute("id", "hide");
    // });
    // enelem.forEach(element => {
    //     element.removeAttribute("id");
    // });
    //language setting if japanese
    var urlParam = location.search.substring(1);
    var lang = 'en';
    if(urlParam) {
        var param = urlParam.split('&');
        var paramArray = [];
        for (i = 0; i < param.length; i++) {
        var paramItem = param[i].split('=');
        paramArray[paramItem[0]] = paramItem[1];
        }
        lang = paramArray.lang;
    }
    if (lang == 'ja') {
        enelem.forEach(element => {
            element.classList.add('disabled');
        });
        navja.setAttribute('id', 'selected');
        naven.removeAttribute('id');
    }else{
        jaelem.forEach(element => {
            element.classList.add('disabled');
        });
        naven.setAttribute('id', 'selected');
        navja.removeAttribute('id');
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
}
window.addEventListener('resize', checkAspect);
window.addEventListener("orientationchange", checkAspect);

function changelang(elem){
    var jaelem = Array.from(document.getElementsByClassName("ja"));
    var enelem = Array.from(document.getElementsByClassName("en"));
    var navja = document.getElementsByClassName("lang-ja")[0];
    var naven = document.getElementsByClassName("lang-en")[0];
    if(navja.getAttribute('id')==='selected') {
        enelem.forEach(element => {
            element.classList.remove('disabled');
        });
        jaelem.forEach(element => {
            element.classList.add('disabled');
        });
        naven.setAttribute('id', 'selected');
        navja.removeAttribute('id');
    }else{
        jaelem.forEach(element => {
            element.classList.remove('disabled');
        });
        enelem.forEach(element => {
            element.classList.add('disabled');
        });
        navja.setAttribute('id', 'selected');
        naven.removeAttribute('id');
    }
}

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