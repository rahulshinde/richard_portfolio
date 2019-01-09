Site = {}

$(document).ready(function(){
  Site.body = $('body');
  Site.window_height = $(window).height();

  Site.slideshow_next = $('#slide_next');
  Site.slideshow_prev = $('#slide_prev');

  // if (Site.body.hasClass('project_page')){
  //   setTimeout(function(){
  //     Site.body.addClass('hide_nav');
  //   }, 2000);
  // }

  if (Site.body.hasClass('slideshow')){
    Site.setupSlideshow();
  }

  Site.slideshow_next.on('click', Site.slideshowNext);
  Site.slideshow_prev.on('click', Site.slideshowPrev);
  $('.slide_controls').on('mouseenter', Site.showFooter);
  $('.slide_controls').on('mouseleave', Site.hideFooter);
  $('#open_gallery').on('click', Site.toggleGallery);
})

Site.showFooter = function(){
  Site.body.addClass('show_footer');
};

Site.hideFooter = function(){
  Site.body.removeClass('show_footer'); 
}

Site.setupSlideshow = function(){
  Site.slideshow_length = $('.slide').length;
  Site.current_slide = 1;
  Site.current = $('#current_slide');
  Site.current.html(Site.current_slide);
  $('#total_slides').html(Site.slideshow_length);

  $(document).on('keyup', Site.keyCommand);
}

Site.keyCommand = function(e){
  if(e.keyCode === 37){
    Site.slideshowPrev();
  }
  if(e.keyCode === 39){
    Site.slideshowNext();
  }
}

Site.slideshowNext = function(){
  Site.current_slide = Site.current_slide + 1;
  if (Site.current_slide > Site.slideshow_length){
    Site.current_slide = 1;
  }

  $('.slide').removeClass('current');
  $('.slide' + Site.current_slide).addClass('current');
}

Site.slideshowNext = function(){
  Site.current_slide = Site.current_slide + 1;
  if (Site.current_slide > Site.slideshow_length){
    Site.current_slide = 1;
  }

  $('.slide').removeClass('current');
  $('.slide' + Site.current_slide).addClass('current');
  Site.current.html(Site.current_slide);
}

Site.slideshowPrev = function(){
  Site.current_slide = Site.current_slide - 1;
  console.log(Site.current_slide);
  if (Site.current_slide < 1){
    Site.current_slide = Site.slideshow_length;
  }

  $('.slide').removeClass('current');
  $('.slide' + Site.current_slide).addClass('current');
  Site.current.html(Site.current_slide);
}


Site.toggleGallery = function(){
  Site.body.toggleClass('gallery_open');
}