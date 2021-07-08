var cnt = document.getElementById("list").childElementCount;
console.log(cnt); 
const list = document.querySelector('#list')
if (cnt === 1)  {
   list.classList.add('count1');
 } else if (cnt == 2)  {
   list.classList.add('count2');
 }else if (cnt == 3)  {
   list.classList.add('count3');
 }else if (cnt == 4)  {
   list.classList.add("count4");
 }else if (cnt == 5)  {
   list.classList.add("count5");
 }else {
   var minus = cnt-4;
   console.log(minus)
   document.querySelector('.plus'),innerHTML.`<span>${minus}</span>`;
   list.classList.add("count6");
 }