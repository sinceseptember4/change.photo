"use strict";
let inview = false;
const gallery = document.querySelectorAll('.change-photo');
<<<<<<< HEAD

gallery.forEach(function(v){
  let ul = v.querySelector('ul');
  let cnt = ul.childElementCount;
  let img = v.querySelector('img');

  let width =img.width;
  let height =img.height;
  let aspect1 = width / height;
<<<<<<< HEAD:js-gally.js
=======
  console.log(width);
  console.log(height);
  console.log(aspect1);
>>>>>>> 058250df0a8e98704290413bb18b490cdafdc8f6:change-photo.js

if (height>!0.000000001 && width>!0.000000001){
}else{  location.reload();
}
if (cnt == 1)  {
   v.classList.add('count1');
 } else if (cnt == 2 && aspect1 < 1)  {
   v.classList.add('count2-2');
 }else if (cnt == 2)  {
  v.classList.add('count2');
 }else if (cnt == 3 && aspect1 > 1)  {
  v.classList.add('count3-2');
 }else if (cnt == 3)  {
  v.classList.add('count3');
 }else if (cnt == 4)  {
   v.classList.add("count4");
 }else if (cnt == 5)  {
   v.classList.add("count5");
 }else {
   var minus = cnt-4;
   console.log(minus);
   v.classList.add("count6");
   var photo4 = ul.children[4];
   photo4.insertAdjacentHTML('beforeend', `<h1>+${minus}</h1>`);

   var children4 = ul.children[4];
   var clientHeight = children4.clientHeight;
   var countfontsize = `${clientHeight*0.1}px`;
   children4.style.fontSize = countfontsize;
   children4.insertAdjacentHTML('beforeend', `<h1>+${minus}</h1>`);
}
});

gallery.forEach(function (v) {
    let ul = v.querySelector('ul');
    let cnt = ul.childElementCount;
    let img = v.querySelector('img');
    function style() {
        let width = img.width;
        let height = img.height;
        let aspect1 = width / height;
        if (cnt == 1) {
            v.classList.add('count1');
        }
        else if (cnt == 2 && aspect1 < 1) {
            v.classList.add('count2-2');
        }
        else if (cnt == 2) {
            v.classList.add('count2');
        }
        else if (cnt == 3 && aspect1 > 1) {
            v.classList.add('count3-2');
        }
        else if (cnt == 3) {
            v.classList.add('count3');
        }
        else if (cnt == 4) {
            v.classList.add("count4");
        }
        else if (cnt == 5) {
            v.classList.add("count5");
        }
        else {
            var minus = cnt - 4;
            v.classList.add("count6");
            var children4 = ul.children[4];
            var clientHeight = children4.clientHeight;
            var countfontsize = `${clientHeight * 0.1}px`;
            children4.style.fontSize = countfontsize;
            children4.insertAdjacentHTML('beforeend', `<h1>+${minus}</h1>`);
        }
    }
    ;
    setTimeout(style, 10);
});
;
const lists = Array.from(document.querySelectorAll("img"));
lists.forEach(li => {
    li.addEventListener("click", e => {
        inview = true;
        Fullscreen();
        let index = lists.findIndex(list => list === e.target);
        let partent = e.target.parentElement.parentElement.parentElement;
        console.log(partent);
        let slideimgs = partent.querySelectorAll("img");
        console.log(e.target);
        let imgs = [];
        slideimgs.forEach(i => {
            imgs.push(i.getAttribute('src'));
        });
        let serect = [].slice.call(partent.children).indexOf(e.target.parentElement.parentElement);
        let serectnow = imgs[serect];
        console.log(serectnow);
    });
    function Fullscreen() {
        document.body.requestFullscreen();
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterbegin', '<div id=inview><div id=inview-img></div><div id=inview-up></div><div id=inview-down></div><div id=inview-out></div></div>');
    }
    ;
    function exit() {
        document.exitFullscreen();
        inview = false;
    }
    ;
});
