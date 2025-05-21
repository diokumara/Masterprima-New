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
});

// ===========================================================================
// To-top (Scroll Up)
// ==========================================================================
// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// });

// ===========================================================================
// FLOATING BUTTON V2
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    // You can add additional functionality here if needed
    // For example, track clicks on the WhatsApp button
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
            
            // Or send an event to Google Analytics
            // gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': 'Floating Button'});
        });
    }
    
    // Optional: Hide button when printing
    window.addEventListener('beforeprint', function() {
        document.querySelector('.floating-whatsapp').style.display = 'none';
    });
    
    window.addEventListener('afterprint', function() {
        document.querySelector('.floating-whatsapp').style.display = 'block';
    });
});