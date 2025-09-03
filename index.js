
  const swiper = new Swiper(".brands-content", {
  slidesPerView: 5,   // show 3 boxes
  spaceBetween: 20,   // gap between boxes
  loop: false,        // don’t loop (optional)

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
const testimonialsSwiper = new Swiper(".testimonials-swiper", {
slidesPerView: 3,
centeredSlides: true,
spaceBetween: 30, // add more space so outside slides are visible
loop: true,
grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  on: {
    slideChange: function () {
      updateSlideBlur();
    },
  },
});

// Initial blur
updateSlideBlur();

function updateSlideBlur() {
  document.querySelectorAll(".testimonials-swiper .swiper-slide").forEach(slide => {
    if (slide.classList.contains("swiper-slide-active")) {
      slide.style.transform = "scale(1)";
      slide.style.filter = "none";
    } else {
      slide.style.transform = "scale(0.9)";
      slide.style.filter = "blur(2px) brightness(0.8)";
    }
  });
}

const accOption=document.querySelector(".bi-person-circle")
const navlog=document.querySelector(".navlog")
console.log("::",navlog.innerHTML)
accOption.addEventListener("click",()=>{
  alert("clicked")
})
accOption.addEventListener("onClick",()=>{
  accOption.style.color="red"
})


// show navlog on hover
accOption.addEventListener("onClick", () => {
  navlog.classList.add("show");
});

// optional: hide when mouse leaves
accOption.addEventListener("mouseleave", () => {
  navlog.classList.remove("show");
    accOption.style.color="black"

});
