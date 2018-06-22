$(document).ready(function() {

  var activeClass = location.hash.substring(1);
  createHeaders();
  showArticles(activeClass);
  markActiveLink(activeClass);

  $('.js-tag-link').click(function(e) {

    var activeClass = $(this).prop("hash").substring(1);
    showArticles(activeClass);
    markActiveLink(activeClass);
    
  });

  $('.js-scroll-link').click(function(e) {
		e.preventDefault();

		var linkOffset = -40;
		if ($($.attr(this, 'href')).data('scroll-link-offset')) {
			linkOffset += $($.attr(this, 'href')).data('scroll-link-offset')
		};

		$('html, body').animate({
			scrollTop: $('#'+$.attr(this, 'data-anchor')).offset().top + linkOffset

		}, 500);
  });
  
});

function showArticles(tagName) {
  $('.js-scroll-link').hide();
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
function createHeaders() {
  var $headers = $('.headers-navigation').html('');
  $('article').each(function(){

    var $article = $(this);
    $headers.append('<a class="js-scroll-link '+$article.attr('class')+'" data-anchor="'+$article.attr('id')+'">'+$article.find('h2').text()+'</a>')
    
  })
}


;
