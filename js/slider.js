jQuery(document).ready(function ($) {

   const slideUl = $('.js-slider-list');
   const slideItem = $('.js-slider-list-item');
   const slideCount = slideItem.length;
   const slideWidth = slideItem.width();
   const slideHeight = slideItem.height();
   const sliderUlWidth = slideCount * slideWidth;

   $('.js-slider').css({ width: slideWidth, height: slideHeight });

   $(slideUl).css({ width: sliderUlWidth, marginLeft: - slideWidth });

   $(slideItem.last()).prependTo(slideUl);

   function moveLeft() {
      $(slideUl).animate({
         left: + slideWidth
      }, 800, function () {
         $(slideItem.last()).prependTo(slideUl);
         $(slideUl).css('left', '');
      });
   };

   function moveRight() {
      $(slideUl).animate({
         left: - slideWidth
      }, 800, function () {
         /* $('.js-slider ul li:first-child').appendTo(slideUl);*/
         $(slideItem.first()).appendTo(slideUl);
         $(slideUl).css('left', '');
      });
   };

   $('a.control_prev').click(function () {
      moveLeft();
   });

   $('a.control_next').click(function () {
      moveRight();
   });

});