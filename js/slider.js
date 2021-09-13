jQuery(document).ready(function ($) {

   let slideUl = $('.js-slider ul');
   let slideCount = $('.js-slider ul li').length;
   let slideWidth = $('.js-slider ul li').width();
   let slideHeight = $('.js-slider ul li').height();
   let sliderUlWidth = slideCount * slideWidth;

   $('.js-slider').css({ width: slideWidth, height: slideHeight });

   $(slideUl).css({ width: sliderUlWidth, marginLeft: - slideWidth });

   $('.js-slider ul li:last-child').prependTo(slideUl);

   function moveLeft() {
      $(slideUl).animate({
         left: + slideWidth
      }, 800, function () {
         $('.js-slider ul li:last-child').prependTo(slideUl);
         $(slideUl).css('left', '');
      });
   };

   function moveRight() {
      $(slideUl).animate({
         left: - slideWidth
      }, 800, function () {
         $('.js-slider ul li:first-child').appendTo(slideUl);
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