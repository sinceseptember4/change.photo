let inview :boolean= false;
const gallery : any= document.querySelectorAll('.change-photo');

if (inview) {

}
gallery.forEach(function(v){
  let ul = v.querySelector('ul');
  let cnt = ul.childElementCount;
  let img = v.querySelector('img');


  function style() {
    let width: number =img.width;
    let height: number =img.height;
    let aspect1: number = width / height;
  

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
    v.classList.add("count6");
    var children4 = ul.children[4];
    var clientHeight = children4.clientHeight;
    var countfontsize = `${clientHeight*0.1}px`;
    children4.style.fontSize = countfontsize;
    children4.insertAdjacentHTML('beforeend', `<h1>+${minus}</h1>`);
    }
  };

  setTimeout(style , 10);


});
});

const lists = Array.from(document.querySelectorAll("img"));
lists.forEach(li => {
  li.addEventListener("click", e => {
    inview = true;
    let index = lists.findIndex(list => list === e.target);
    let partent = e.target.parentElement.parentElement.parentElement;
    console.log(partent);
    let slideimgs = partent.querySelectorAll("img")
    console.log(e.target);
    let imgs :string = [];
    slideimgs.forEach( i => {
        imgs.push(i.getAttribute('src')) ;
    });

    let serect = [].slice.call( partent.children ).indexOf( e.target.parentElement.parentElement ) ;


    let serectnow = imgs[serect];
    console.log(serectnow);

    

  });