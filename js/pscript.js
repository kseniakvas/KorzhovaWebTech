function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  function mobileHide() {
    var divs = document.querySelectorAll('.flex-nav > div');
    for (var i = 1; i < divs.length; i++) {
    divs[i].style.display = 'none'; 
}
  } 

// change

window.addEventListener('scroll', function() {
    var firstNav = document.querySelector('#hcinema');
    var secondNav = document.querySelector('.flex-nav');
    if (firstNav.getBoundingClientRect().bottom <= 0) {
        secondNav.classList.add('change-background');
    } else {
        secondNav.classList.remove('change-background');
    }
});

// carousel

var splide = new Splide( '#MySlider', {
    type   : 'loop',
    perPage: 4,
    focus  : 'center',
    gap: '30px',
    autoplay: true,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 1
      },
      768: {
        arrows: false,
        pagination: true
      }
    }
  } );
  
  splide.mount();