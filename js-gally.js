const gallery = document.querySelectorAll('.js-gallery');

gallery.forEach(function(v){
  let ul = v.querySelector('ul');
  let cnt = ul.childElementCount;
  let img = v.querySelector('img');

  let width =img.width;
  let height =img.height;
  let aspect1 = width / height;

  console.log(height);
  console.log(aspect1);
if (height>!0.000000001 && width>!0.000000001){
}else{  
  location.reload();
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
  v.classList.add("count6");
   setTimeout
   var minus = cnt-4;
   var aaa = ul.children[4];
   var bbb =`<h1>+${minus}</h1>`;
   var ccc = img.children[4];
   let width =ccc.width;
   console.log(width);
   aaa.insertAdjacentHTML('beforeend', `<h1>+${minus}</h1>`);

}
});
