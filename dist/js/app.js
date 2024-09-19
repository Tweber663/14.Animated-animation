"use strict";
const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const nav = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener('click', () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
});
toggle2 === null || toggle2 === void 0 ? void 0 : toggle2.addEventListener('click', () => {
    nav2 === null || nav2 === void 0 ? void 0 : nav2.classList.toggle('active');
});
//# sourceMappingURL=app.js.map