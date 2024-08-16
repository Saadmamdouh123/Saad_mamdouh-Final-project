//Menu interactive
let imgg = document.querySelectorAll(".img1");
let starTers = document.querySelector("#btns-1");
let breakfast = document.querySelector("#btns-2");
let lunch = document.querySelector("#btns-3");
let dinner = document.querySelector("#btns-4");
let hh = document.querySelector("#start1");

starTers.addEventListener("click", () => {
  hh.textContent = "starters";
  imgg.forEach(element => {
    // element.setAttribute("src", "./public/images/menu-item-1.png");
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

//carousel 1 auto slide:
let nextBtns = document.querySelectorAll(".next")
let containers = document.querySelectorAll(".carousel-container")

let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});

containers.forEach(container => {
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
})

const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);

let carousel2 = document.querySelector(".carousel2");
let imgg2 = ["hello.png","hello2.png","hello.png"]

setInterval(() => {
  let randomnumber = Math.floor(Math.random() * imgg2.length)
  carousel2.style.backgroundImage = 'url("img/ '+ imgg2[randomnumber]+'")'
}, 6000);


let upButton = document.querySelector('.back-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
});
upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});