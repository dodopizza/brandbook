

$(document).ready(function() {

  var activeClass = location.hash.substring(1);
  createHeaders();
  showArticles(activeClass);
  markActiveLink(activeClass);

  $('.js-tag-link').click(function(e) {

    activeClass = $(this).prop("hash").substring(1);
    showArticles(activeClass);
    markActiveLink(activeClass);

    $('html, body').scrollTop(0);
    
  });

  $('.js-scroll-link').click(function(e) {
		e.preventDefault();

		var linkOffset = -70;
		if ($($.attr(this, 'href')).data('scroll-link-offset')) {
			linkOffset += $($.attr(this, 'href')).data('scroll-link-offset')
		};

		$('html, body').animate({
			scrollTop: $('#'+$.attr(this, 'data-anchor')).offset().top + linkOffset

		}, 500);
  });

  stickyNav();
  $(window).scroll(stickyNav);

  function showArticles(tagName) {
    $('.js-scroll-link').hide();
    $('article').hide();
    if (tagName) {
      $('.'+tagName).show();
    }
  }
  
});

function stickyNav(){
  var scrollTop    = $(window).scrollTop();
  var menuTop = $('.header-container').offset().top;
  if ( scrollTop >= menuTop ) {
    $('.header').addClass('stuck');
  } else {
    $('.header').removeClass('stuck');
  }
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
