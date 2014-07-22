$( document ).ready(function() {
  //alert("document is ready!");
  if (screen.width > 1050) {
    $(".event").height($(".main").height());
  }
  
  //track button clicks as events in Google Analytics
  $('.cta a').on('click', function() {
    ga('send', 'event', 'Reserve Your Seat button', 'click');
   });
  
});