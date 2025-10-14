/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
//


+++++++++++++++++++++old ++++++++++

//window.addEventListener('DOMContentLoaded', event => {
//
//    // Navbar shrink function
//    var navbarShrink = function () {
//        const navbarCollapsible = document.body.querySelector('#mainNav');
//        if (!navbarCollapsible) {
//            return;
//        }
//        if (window.scrollY === 0) {
//            navbarCollapsible.classList.remove('navbar-shrink')
//        } else {
//            navbarCollapsible.classList.add('navbar-shrink')
//        }
//
//    };
//
//    // Shrink the navbar
//    navbarShrink();
//
//    // Shrink the navbar when page is scrolled
//    document.addEventListener('scroll', navbarShrink);
//
//    // Activate Bootstrap scrollspy on the main nav element
//    const mainNav = document.body.querySelector('#mainNav');
//    if (mainNav) {
//        new bootstrap.ScrollSpy(document.body, {
//            target: '#mainNav',
//            rootMargin: '0px 0px -40%',
//        });
//    };
//
//    // Collapse responsive navbar when toggler is visible
//    const navbarToggler = document.body.querySelector('.navbar-toggler');
//    const responsiveNavItems = [].slice.call(
//        document.querySelectorAll('#navbarResponsive .nav-link')
//    );
//    responsiveNavItems.map(function (responsiveNavItem) {
//        responsiveNavItem.addEventListener('click', () => {
//            if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                navbarToggler.click();
//            }
//        });
//    });
//
//    // Activate SimpleLightbox plugin for portfolio items
//    new SimpleLightbox({
//        elements: '#portfolio a.portfolio-box'
//    });
//
//});


window.addEventListener('DOMContentLoaded', event => {
  // Navbar shrink function
  const navbarShrink = () => {
    const navbar = document.querySelector('#mainNav');
    if (!navbar) return;
    navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // Bootstrap scrollspy
  const mainNav = document.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, { target: '#mainNav', rootMargin: '0px 0px -40%' });
  }

  // Collapse responsive navbar
  const navbarToggler = document.querySelector('.navbar-toggler');
  document.querySelectorAll('#navbarResponsive .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') navbarToggler.click();
    });
  });

  // Activate SimpleLightbox safely
//  if (typeof SimpleLightbox !== 'undefined') {
//    new SimpleLightbox({ elements: '#portfolio a.portfolio-box' });
//  } else {
//    console.error("SimpleLightbox library not loaded!");
//  }
//});

