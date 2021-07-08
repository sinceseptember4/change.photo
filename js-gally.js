var parent = document.querySelector('.js-gallery');
console.log(parent);
var cnt = $(".js-gallery li").length;

console.log(cnt);
if (cnt == 1)  {
   parent.classList.add('count1');
 } else if (cnt == 2)  {
   parent.classList.add('count2');
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
   var textbox_element = document.querySelector('#list');
   var new_element = innerHTML = `<h1>+${minus}</h1>`;
   textbox_element.before(new_element);
 }