"use strict";
const gallery = document.querySelectorAll('.change-photo');
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
        let serectnow = imgs[serect];
        console.log(serectnow);
        let inviewhtml = `<div id=inview><img id=inview-img src = ${serectnow}><div id=inview-up></div><div id=inview-down></div><div id=inview-exit></div></div>`;
        Fullscreen(inviewhtml);
        function Fullscreen(i) {
            if (i != undefined) {
                const body = document.querySelector('body');
                body.insertAdjacentHTML('afterbegin', i);
                document.body.requestFullscreen();
            }
        }
        document.getElementById("inview-exit").onclick = function () {
            var el = document.getElementById('inview');
            el.remove();
            function exitFullscreen() {
                document.exitFullscreen();
            }
            ;
            setTimeout(exitFullscreen, 100);
        };
    });
});
function up() {
    serect + 1;
}
