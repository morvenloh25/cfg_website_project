document.querySelector('.btn').addEventListener('click', function() {
  $('.content').toggleClass('show-main');
  $('.content').toggleClass('show-safety');
});

$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})

document.querySelector('.dropdown-toggle').addEventListener('click', function() {
  $('.dropdown-menu').toggleClass('dropdown-menu-visible');
});
