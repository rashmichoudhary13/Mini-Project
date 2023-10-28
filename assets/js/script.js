$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active')
    $('.menu').toggleClass('active')
  });
});

$(() => {

  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 50 ? $('header').addClass('og-hf') : $('header').removeClass('og-hf');
  });
});

$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });

});

     $(document).ready(function () {
      // Show Register Modal when Register button is clicked
      $('.button-01 a').on('click', function (e) {
        e.preventDefault();
        $('#registerModal .modal-content').load('form.html', function () {
          $('#registerModal').modal('show');
        });
      });
    });
  
