const itemPanel1 = document.querySelector('#panel1');
const itemPanel2 = document.querySelector('#panel2');
const itemPanel3 = document.querySelector('#panel3');
const itemPanel4 = document.querySelector('#panel4');



itemPanel1.onclick = function(){
    itemPanel1.classList.toggle('active');
}
itemPanel2.onclick = function(){
    itemPanel2.classList.toggle('active');
}
itemPanel3.onclick = function(){
    itemPanel3.classList.toggle('active');
}
itemPanel4.onclick = function(){
    itemPanel4.classList.toggle('active');
}