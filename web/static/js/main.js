// SIDE MENU

var labels = document.querySelectorAll(".nav_list__list-item-label");
var activeStates = document.querySelector(".nav_list__list-item-label--active");   

activeStates.classList.add('nav_list__list-item-label--dropdown');


labels.forEach(function(label) {
  label.addEventListener('click', function() {
    activeStates.classList.remove('nav_list__list-item-label--dropdown');
    label.classList.toggle('nav_list__list-item-label--dropdown');
    
  })
})

//spy

var spy = new Gumshoe('#subNav a');









