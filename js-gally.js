const aaa = document.querySelectorAll('.js-gallery');

aaa.forEach(function(v){
  let ul = v.querySelector('ul');
  let cnt = ul.childElementCount;
  let img = v.querySelector('img');
  console.log(cnt)
  let width =img.width;
  let height =img.height;
  let aspect1 = width / height;
  console.log(aspect1);


if (cnt == 1)  {
   v.classList.add('count1');
 } else if (cnt == 2 && aspect1 < 1)  {
   v.classList.add('count2-2');
 }else if (cnt == 2 && aspect1 > 1)  {
  v.classList.add('count2');
 }else if (cnt == 3 )  {
  v.classList.add('count3');
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
   var textbox_element = v.querySelector('li');
   var new_element =`<h1>+${minus}</h1>`;
   console.log(new_element );
   textbox_element.after(new_element);
}

});

