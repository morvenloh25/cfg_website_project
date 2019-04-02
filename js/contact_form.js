document.querySelector('.btn').addEventListener('click', function() {
  $('.content').toggleClass('show-main');
  $('.content').toggleClass('show-safety');
});

document.querySelector('.dropdown-toggle').addEventListener('click', function() {
  $('.dropdown-menu').toggleClass('dropdown-menu-visible');
});
