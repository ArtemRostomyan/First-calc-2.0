let num = document.querySelector('.finish-num');
let burger = document.querySelector('.burger');
let footer = document.querySelector('.footer');
burger.addEventListener('click', give_class);
document.querySelectorAll('.count').forEach(function (button) {
   button.addEventListener('click', on_button_click);
});
document.querySelector('.finish-num').addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
      count();
   }
});
function give_class(){
   this.classList.toggle('active');
   footer.classList.toggle('footer-active');
}
function on_button_click(e){
   if(e.target.textContent === '('){
      if(num.value.length < 1){
         num.value += '(';
      } else{
         num.value += '*(';
      }
   } else if(e.target.textContent === '^'){
      num.value += '**';
   } else{
      num.value += e.target.textContent;
   }
}
// let check_quantity = 0;
function clean() {
   num.value = '';
}
function del(){
   let d_last = num.value.split('');
   d_last.pop();
   num.value = d_last.join('');
}
function count(){
   let i;
   for(i = 0 ; i < num.value.length; i++){
   }
   let not_result =/[;'a-zA-Zа-яА-Я]/;
   function test_nr(str){
      return str.search(not_result) != -1;
   }
   if(num.value === ''){
      num.value = 'че нить напиши -_-';
   } else if(!test_nr(num.value)){ 
      let cos = eval(num.value);
      num.value = +cos.toFixed(i);
   } else{
      num.value = '-_-ты чё слышь';
   }
}
function plus_but(e) {
   num.value += e.textContent;
}
function dick(e) {
   num.value = '--з';
}