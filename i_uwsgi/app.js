// ServiceWorker Registration
if('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);

        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

$('.mobile-tab').hide();
  $('#burg').on('click', function(){
    $('.mobile-tab').slideToggle(450)
  });

  /*
  var hamburgerButton = document.querySelector('.bar_fi');
  var mobileNav = document.querySelector('.mobile');

  function openMobile() {
      mobileNav.classList.add('open');
  }

  function closeMobile() {
      mobileNav.classList.remove('open');
  }

  hamburgerButton.addEventListener('click', openMobile);
  mobileNav.addEventListener('click', closeMobile);
*/

  //$('.mobile').hide();
$('.bar_fi').on('click', function(){
  $('.mobile').slideToggle(300)
});

$('.mobile').on('click', function(){
    $('.mobile').slideToggle(300)
})
