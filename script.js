
// Add your javascript code here

// Example code: toggle a class on click
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener('click',() => {
  navigation.classList.toggle('hidden');
});


