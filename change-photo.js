"use strict";
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
        console.log(serect);
        var serectnow = "";
        var el = "";
        let inviewhtml = "";
        document.body.requestFullscreen();
        Fullscreen(serect);
        function Fullscreen(i) {
            if (i != undefined) {
                const body = document.querySelector('body');
                serectnow = imgs[i];
                console.log(serectnow);
                inviewhtml = `<div id=inview><div id=inview-exit><span></span><span></span></div><img id=inview-img src = ${serectnow}><div id=inview-up><span></span><span></span></div><div id=inview-down><span></span><span></span></div></div>`;
                body.insertAdjacentHTML('afterbegin', inviewhtml);
                document.getElementById("inview-exit").onclick = function () {
                    el = document.getElementById('inview');
                    el.remove();
                    setTimeout(exitFullscreen, 10);
                };
                document.body.addEventListener('keydown', event => {
                    if (key_code == 27) {
                        console.log("esc");
                    }
                });
                document.getElementById("inview-up").onclick = function () {
                    el = document.getElementById('inview');
                    el.remove();
                    serect = serect + 1;
                    console.log(serect);
                    Fullscreen(serect);
                };
                document.getElementById("inview-down").onclick = function () {
                    el = document.getElementById('inview');
                    el.remove();
                    serect = serect - 1;
                    console.log(serect);
                    Fullscreen(serect);
                };
                function exitFullscreen() {
                    document.exitFullscreen();
                }
                ;
            }
        }
    });
});
function up() {
}
