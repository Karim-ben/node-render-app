const itemsEl=document.querySelectorAll('.item');

itemsEl.forEach(function(item) {
   
   item.addEventListener('click', function (e) {
    [...item.children][0].classList.toggle('active');
   });
});
