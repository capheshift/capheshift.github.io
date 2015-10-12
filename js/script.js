
//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//OWL CAROSEL TESTIMONIAL
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// add paralax into header
$(document).ready(
  function() {
    // $("html").niceScroll({
    //  cursorcolor:"#f74d65",
    //  scrollspeed :"100",
    //  cursorborder:"1px solid #f74d65",
    //  horizrailenabled: "false",
    //  cursorborderradius: "0px"
    // });

    var $header = $('header');
    // most of time, its equal to 0
    var oldTop = $(document).scrollTop();
    // set position for header at the first time
    setTimeout(function() {
      $header.css('transform', 'translate3d(0,' + (-oldTop*0.5) + 'px,0)');
    }, 0);

    $(window).scroll(function(e) {
      var newTop = $(document).scrollTop();
      var delta = newTop - oldTop;

      // 614 is heigh of header
      if (newTop > 614) {
        return;
      }

      if (newTop < oldTop) {
        oldTop = newTop;
        delta = oldTop;
      }

      $header.css('transform', 'translate3d(0,' + (-delta*0.5) + 'px,0)');
    })
  }
);

new WOW().init();

/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
});
//]]>


/**
 * get information of ca phe shift team from github
 */
$(document).ready(function () {

  function appendUsers(data) {
    var i, len, user, userImg, userTitle, listAllUsers;
    listAllUsers = $('.list-all-users');

    for (i = 0, len = data.length; i < len; ++i) {
      user = $('<div />', {
        'class': 'col-md-2 user-item wow fadeInRight animated'
      });
      userImg = $('<img />', {
        'src': data[i].avatar_url,
        'alt': data[i].login
      });
      userTitle = $('<h4 />', {
        'class': 'user-title',
        'text': data[i].login
      });
      user.append(userImg);
      user.append(userTitle);
      listAllUsers.append(user);
    }
  }

  $.ajax({
    url: 'https://api.github.com/orgs/capheshift/public_members',
    method: '',
    success: function (data) {
      appendUsers(data);
    },
    error: function (xhr, status, error) {
      console.log(xhr, status, error);
    }
  });
});

// get list user from github
$(document).ready(function() {
    var listUser = $('.list-user');
    var user = '';
    var link = '';
    var avatar = '';
    var name = '';
    $.ajax({
        url: 'https://api.github.com/orgs/capheshift/members',
        method: 'GET',
        success: function(data) {
          console.log(data);
          for(var i = 0, len =  data.length; i < len; i++) {
              user = $('<div class="col-md-2 user-item wow fadeInRight animated"></div>');
              link = $('<a />', {
                'href': data[i].html_url,
				        'target': '_blank'
              });
              avatar = $('<img />', {
                'src': data[i].avatar_url,
                'alt': data[i].login
              });
              name = $('<h4 />', {
                'class': 'user-title',
                'text': data[i].login
              });
              user.append(avatar);
              user.append(name);
			  link.append(user);
              listUser.append(link);
          }
        },
        error: function(xhr, status, error) {
          console.log(xhr, status, error);
      }
    });
});

// Function handle event of slideshow .
$(document).ready(function() {
  $('.bxslider').bxSlider({
    auto : true,
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 400,
    slideMargin:5
  });
});
