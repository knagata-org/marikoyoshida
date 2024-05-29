/////////////////////////////////
//////////// ON LOAD ////////////
/////////////////////////////////
$(document).ready(function () {
    ////////// WINDOW SETTING //////////
    checkAspect();
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
        console.log(w + ' x ' + h);
        if(dw/dh > w/h){
            pics[i].style.setProperty('width', dw+"px");
            pics[i].style.setProperty('height', "auto");
            // pics[i].style.setProperty('left', (dw-w)/2+"px");
            // pics[i].style.setProperty('top', "0px");
            
            
        }else{
            pics[i].style.setProperty('width', "auto");
            pics[i].style.setProperty('height', dh+"px");
            // pics[i].style.setProperty('left', "0px");
            // pics[i].style.setProperty('top', (dh-h)/2+"px");
        }
    }

    const root = document.querySelector(':root');
    root.style.setProperty('--window-width', dw);
  }
  window.addEventListener('resize', checkAspect);
  window.addEventListener("orientationchange", checkAspect);
  