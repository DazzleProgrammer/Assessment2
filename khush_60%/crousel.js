$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<div class='arrow'> < </div>", "<div class='arrow'> > </div>"],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
