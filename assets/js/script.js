// Dropdown toggling
// Select all elements with the class "select-menu"
const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = optionMenu.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
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

// Close modal when close button is clickeds
$('#registerModal .close').on('click', function () {
  $('#registerModal').modal('hide');
});






