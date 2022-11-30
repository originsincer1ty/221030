const toggleBtn = document.querySelector('.navbarBtn');
const menu = document.querySelector('.navbarMenu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
});

const scrollContainer = document.querySelector(".slide");
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});