var cnt = document.getElementById("list").childElementCount;
console.log(cnt); 
const list = document.querySelector('#list')
if (cnt === 1)  {
   button.classList.add('count1');
 } else if (cnt == 2)  {
   button.classList.add('count2');
 }else if (cnt == 3)  {
   list.classList.add('count3');
 }else if (cnt == 4)  {
   list.classList.add("count4");
 }else if (cnt == 5)  {
   list.classList.add("count5");
 }else if (cnt == 6)  {
   list.classList.add("count6");
 }else {
   console.log("nodate");
 }