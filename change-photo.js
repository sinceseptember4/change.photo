"use strict";
var gallery = document.querySelectorAll('.change-photo');
gallery.forEach(function (v) {
    var ul = v.querySelector('ul');
    var cnt = ul.childElementCount;
    var img = v.querySelector('img');
    function sss() {
        var width = img.width;
        var height = img.height;
        var aspect1 = width / height;
        if (height > !0.000000001 && width > !0.000000001) {
        }
        else {
            location.reload();
        }
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
            console.log(minus);
            v.classList.add("count6");
            var children4 = ul.children[4];
            var clientHeight = children4.clientHeight;
            var countfontsize = clientHeight * 0.1 + "px";
            children4.style.fontSize = countfontsize;
            children4.insertAdjacentHTML('beforeend', "<h1>+" + minus + "</h1>");
        }
    }
    ;
    setTimeout(sss, 50);
});
