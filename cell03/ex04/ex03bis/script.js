$(document).ready(function () {
  $('#deleteItem').on('click', function () {
    $('#list li:last-child').remove();
  });
});