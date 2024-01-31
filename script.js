window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

function openTableOne() {
    document.querySelector("#tableone").classList.remove("ocult")
    document.querySelector("#tablepro").classList.add("ocult")

    document.querySelector("#one").classList.remove("ocult")
    document.querySelector("#pro").classList.add("ocult")
}

function openTablePro() {
    document.querySelector("#tablepro").classList.remove("ocult")
    document.querySelector("#tableone").classList.add("ocult")

    document.querySelector("#pro").classList.remove("ocult")
    document.querySelector("#one").classList.add("ocult")
}

ScrollReveal().reveal('#home .content', { distance: '400px', origin: 'left' ,duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('#home .image', { distance: '400px', origin: 'right',duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('h2, #more .card, .table, .details, .historia, .proposito, .image', { distance: '400px', origin: 'bottom',duration: 500, easing: 'ease-in-out'});


var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true,
  });

  var swiper5 = new Swiper(".mySwiper5", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },

      breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1080: {
          slidesPerView: 3,
          spaceBetween: 50,
      }
    }
  });

  var swiper = new Swiper(".mySwiperTestimonials", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    keyboard: true,
    loop: true,
    grabCursor: true,

    breakpoints: {
        1080: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
  });

  var swiper = new Swiper(".mySwiperDesktop", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    keyboard: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
  });