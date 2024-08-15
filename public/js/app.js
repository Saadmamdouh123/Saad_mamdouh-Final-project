let imgg = document.querySelectorAll(".img1");
let starTers = document.querySelector("#btns-1");
let breakfast = document.querySelector("#btns-2");
let lunch = document.querySelector("#btns-3");
let dinner = document.querySelector("#btns-4");
let hh = document.querySelector("#start1");

starTers.addEventListener("click", () => {
  hh.textContent = "starters";
  imgg.forEach(element => {
    element.setAttribute("src", "./public/images/menu-item-1.png");
});
});

breakfast.addEventListener("click", () => {
  hh.textContent = "breakfast";
  imgg.forEach(element => {
      element.setAttribute("src", "./public/images/menu-item-2.png");
});
});
lunch.addEventListener("click", () => {
  hh.textContent = "Lunch";
  imgg.forEach(element => {
    element.setAttribute("src", "./public/images/menu-item-3.png");
});
});
dinner.addEventListener("click", () => {
  hh.textContent = "Dinner";
  imgg.forEach(element => {
    element.setAttribute("src", "./public/images/menu-item-4.png");
});
});
