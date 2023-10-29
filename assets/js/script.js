$(document).ready(function () {
  // Show Register Modal when Register button is clicked
  $('.button-01 a').on('click', function (e) {
    e.preventDefault();
    $('#registerModal .modal-content').load('form.html', function () {
      $('#registerModal').modal('show');
    });
  });
});

// Close modal when close button is clickeds
$('#registerModal .close').on('click', function () {
  $('#registerModal').modal('hide');
});