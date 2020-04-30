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
    $('.mobile-tab').slideToggle(600)
  });
