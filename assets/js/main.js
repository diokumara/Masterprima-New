AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
})

// ========================================================================= //
// CLOSE NAVBAR
// ========================================================================= //
  const menuBtn = document.getElementById('menu-btn');
  const navbar = document.getElementById('navbar');
  menuBtn.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
  // Close navbar when any nav link is clicked (on small screen)
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', false);
      }
    });
  });