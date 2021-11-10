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
        let slideimgs = partent.querySelectorAll("img");
        console.log(slideimgs);
        let imgs = [];
        slideimgs.forEach(function (push) {
            console.log(push);
            imgs.push(push.getAttribute('src'));
            console.log(imgs);
        });
        let serect = [].slice.call(partent.children).indexOf(e.target.parentElement.parentElement);
        var serectnow = "";
        var el = "";
        let inviewhtml = "";
        let load = true;
        let positon = e.target.parentElement.parentElement;
        console.log(positon);
        Fullscreen(serect);
        function Fullscreen(i) {
            if (i != undefined) {
                const body = document.querySelector('body');
                document.body.classList.add('overflow-hidden');
                serectnow = imgs[i];
                console.log(i);
                console.log(imgs.length);
                let iplus = i + 1;
                load = true;
                if (imgs.length == 1) {
                    inviewhtml = `<div id=inview><img id=inview-img src = ${serectnow}></div><div id=inview-exit><span></span><span></span></div>`;
                }
                else if (i == 0) {
                    inviewhtml = `<div id=inview><img id=inview-img src = ${serectnow}><div id=inview-exit><span></span><span></span></div><div id=inview-up><span></span><span></span></div></div>`;
                }
                else if (iplus == imgs.length) {
                    inviewhtml = `<div id=inview><img id=inview-img src = ${serectnow}><div id=inview-exit><span></span><span></span></div><div id=inview-down><span></span><span></span></div></div>`;
                    load = false;
                }
                else {
                    inviewhtml = `<div id=inview><img id=inview-img src = ${serectnow}><div id=inview-exit><span></span><span></span></div><div id=inview-up><span></span><span></span></div><div id=inview-down><span></span><span></span></div></div>`;
                }
                console.log(body);
                body.insertAdjacentHTML('afterbegin', inviewhtml);
                scrollTo(0, 0);
                document.getElementById("inview-exit").onclick = function () {
                    el = document.getElementById('inview');
                    el.remove();
                    document.body.classList.remove('overflow-hidden');
                    setTimeout(exitFullscreen, 10);
                };
                if (load) {
                    document.getElementById("inview-up").onclick = function () {
                        el = document.getElementById('inview');
                        el.remove();
                        serect = serect + 1;
                        console.log(serect);
                        Fullscreen(serect);
                    };
                }
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
