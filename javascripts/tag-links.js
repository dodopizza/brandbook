$(document).ready(function() {

  var activeClass = location.hash.substring(1);
  showArticles(activeClass);
  markActiveLink(activeClass);

  $('.js-tag-link').click(function(e) {

    var activeClass = $(this).prop("hash").substring(1);
    showArticles(activeClass);
    markActiveLink(activeClass);
    
  });
});

function showArticles(tagName) {
  $('article').hide();
  $('.'+tagName).show();
}

function markActiveLink(tagName) {

  $('.js-tag-link').removeClass('active').each(function(){
    if ($(this).prop("hash").substring(1) == tagName) {
      $(this).addClass('active');
    }
  })
}

;
