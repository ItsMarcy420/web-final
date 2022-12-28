// back to top
$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },100);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

// page 1 
// $(function(){
//     $(window).scroll(function() {
//         if ( $(this).scrollTop() > 600){
//             $('#p1-intro-1').fadeIn("slow");
//         } else {
//             $('#p1-intro-1').fadeOut("slow");
//         }
//     });
// });
$(document).ready(function(){
    $('#p1-intro-1').fadeIn("slow");
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 800){
            $('#p1-intro-2').fadeIn("slow");
        } else {
            $('#p1-intro-2').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1400){
            $('#p1-intro-3').fadeIn("slow");
        } else {
            $('#p1-intro-3').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1800){
            $('#p1-intro-4').fadeIn("slow");
        } else {
            $('#p1-intro-4').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 2200){
            $('#p1-intro-5').fadeIn("slow");
        } else {
            $('#p1-intro-5').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 2600){
            $('#p1-footer').fadeIn("slow");
        } else {
            $('#p1-footer').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 3000){
            $('#p1-footer-icon-1').slideDown("1000");
            $('#p1-footer-icon-2').slideDown("2000");
            $('#p1-footer-icon-3').slideDown("3000");
            $('#p1-footer-p').slideDown("4000");
        } else {
            $('#p1-footer-icon-1').fadeOut("slow");
            $('#p1-footer-icon-2').fadeOut("slow");
            $('#p1-footer-icon-3').fadeOut("slow");
            $('#p1-footer-p').fadeOut("slow");
        }
    });
});


// page 2 
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 600){
            $('#p2-card-1').fadeIn("2000");
            $('#p2-card-2').fadeIn("2300");
            $('#p2-card-3').fadeIn("2600");
            $('#p2-card-4').fadeIn("3000");
        } else {
            $('#p2-card-1').fadeOut("slow");
            $('#p2-card-2').fadeOut("slow");
            $('#p2-card-3').fadeOut("slow");
            $('#p2-card-4').fadeOut("slow");
        }});
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1000){
            $('#p2-card-5').fadeIn("2000");
            $('#p2-card-6').fadeIn("2300");
            $('#p2-card-7').fadeIn("2600");
            $('#p2-card-8').fadeIn("3000");
        } else {
            $('#p2-card-5').fadeOut("slow");
            $('#p2-card-6').fadeOut("slow");
            $('#p2-card-7').fadeOut("slow");
            $('#p2-card-8').fadeOut("slow");
        }});
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1600){
            $('#p2-footer').fadeIn("slow");
        } else {
            $('#p2-footer').fadeOut("slow");
        }
    });
});
$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 1700){
            $('#p2-footer-icon-1').slideDown("1000");
            $('#p2-footer-icon-2').slideDown("2000");
            $('#p2-footer-icon-3').slideDown("3000");
            $('#p2-footer-p').slideDown("4000");
        } else {
            $('#p2-footer-icon-1').fadeOut("slow");
            $('#p2-footer-icon-2').fadeOut("slow");
            $('#p2-footer-icon-3').fadeOut("slow");
            $('#p2-footer-p').fadeOut("slow");
        }
    });
});

// page 3
$(document).ready(function(){
      $('#p3-author-intro-1').hide();
      $('#p3-author-songs-1').hide();
      $('#p3-author-intro-2').hide();
      $('#p3-author-songs-2').hide();
      $('#p3-author-intro-3').hide();
      $('#p3-author-songs-3').hide();
});
$(document).ready(function(){
    $("#p3-author-1").click(function(){
      $("#p3-author-intro-1").animate({
        height:'toggle'
      },800);
      $("#p3-author-songs-1").animate({
        height:'toggle'
      },800);
    });
});
$(document).ready(function(){
  $("#p3-author-2").click(function(){
    $("#p3-author-intro-2").animate({
      height:'toggle'
    },800);
    $("#p3-author-songs-2").animate({
      height:'toggle'
    },800);
  });
});
$(document).ready(function(){
    $("#p3-author-3").click(function(){
      $("#p3-author-intro-3").animate({
        height:'toggle'
      },800);
      $("#p3-author-songs-3").animate({
        height:'toggle'
      },800);
    });
});

$(document).ready(function(){
    $('#p3-product-circle-content-1').hide();
    $('#p3-product-circle-content-2').hide();
    $('#p3-product-circle-content-3').hide();
    $('#p3-product-circle-content-4').hide();
    $('#p3-product-circle-content-5').hide();
    $('#p3-product-circle-content-6').hide();
});
$(document).ready(function(){
    $("#p3-product-circle-1").hover(function(){
        $("#p3-product-circle-content-1").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-circle-2").hover(function(){
        $("#p3-product-circle-content-2").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-circle-3").hover(function(){
        $("#p3-product-circle-content-3").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-circle-4").hover(function(){
        $("#p3-product-circle-content-4").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-circle-5").hover(function(){
        $("#p3-product-circle-content-5").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-circle-6").hover(function(){
        $("#p3-product-circle-content-6").slideToggle();
    });
});
$(document).ready(function(){
    $('#p3-product-content-1').hide();
    $('#p3-product-content-2').hide();
    $('#p3-product-content-3').hide();
    $('#p3-product-content-4').hide();
    $('#p3-product-content-5').hide();
    $('#p3-product-content-6').hide();
});
$(document).ready(function(){
    $("#p3-product-1").hover(function(){
        $("#p3-product-content-1").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-2").hover(function(){
        $("#p3-product-content-2").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-3").hover(function(){
        $("#p3-product-content-3").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-4").hover(function(){
        $("#p3-product-content-4").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-5").hover(function(){
        $("#p3-product-content-5").slideToggle();
    });
});
$(document).ready(function(){
    $("#p3-product-6").hover(function(){
        $("#p3-product-content-6").slideToggle();
    });
});

$(function(){
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 2500){
            $('#p3-footer-icon-1').slideDown("1000");
            $('#p3-footer-icon-2').slideDown("2000");
            $('#p3-footer-icon-3').slideDown("3000");
            $('#p3-footer-p').slideDown("4000");
        } else {
            $('#p3-footer-icon-1').fadeOut("slow");
            $('#p3-footer-icon-2').fadeOut("slow");
            $('#p3-footer-icon-3').fadeOut("slow");
            $('#p3-footer-p').fadeOut("slow");
        }
    });
});