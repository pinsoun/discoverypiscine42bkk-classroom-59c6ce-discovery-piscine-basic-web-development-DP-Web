$(document).ready(function () {
  $('#addItem').on('click', function () {
    $('#list').append('<li>New item</li>');
  });
});