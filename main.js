console.log('working');

$(document).ready(function () {
  // banner carousel
  $('#banner-area .owl-carousel').owlCarousel({
    dots: true,
    items: 1
  });

  // on sale carousel
  $('#onsale .owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});
