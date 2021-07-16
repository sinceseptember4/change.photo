const parent = document.querySelector('.js-gallery');
const cnt = document.querySelectorAll('li').length;
const img = document.querySelectorAll('img');

let width =img[0].width;
let height =img[0].height;
let aspect1 = width / height;
console.log(aspect1);


if (cnt == 1)  {
   parent.classList.add('count1');
 } else if (cnt == 2 && aspect1 < 1)  {
   parent.classList.add('count2-2');
 }else if (cnt == 2 && aspect1 > 1)  {
  parent.classList.add('count2');
 }else if (cnt == 3 && aspect1 > 1 )  {
  parent.classList.add('count3-2');
 }else if (cnt == 3)  {
  parent.classList.add('count3');
 }else if (cnt == 4)  {
   parent.classList.add("count4");
 }else if (cnt == 5)  {
   parent.classList.add("count5");
 }else {
   var minus = cnt-4;
   console.log(minus);
   parent.classList.add("count6");
   var textbox_element = $(".js-gallery a");
   var new_element =`<h1>+${minus}</h1>`;
   console.log(new_element );
   textbox_element.after(new_element);
}
