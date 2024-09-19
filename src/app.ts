const toggle = document.getElementById('toggle'); 
const toggle2 = document.getElementById('toggle2'); 
const nav = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');


toggle?.addEventListener('click', () => {
    nav?.classList.toggle('active');
})

toggle2?.addEventListener('click', () => {
    nav2?.classList.toggle('active');
})