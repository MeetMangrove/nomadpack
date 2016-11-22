$(document).ready(function() {
  $('.menu a').on('click', function(e) {
    e.preventDefault();

    var aTag = $("#" + $(this).attr('id'))

    if(!$(this).hasClass('is-open')) {
      var that = $(this)
      $("<div class='menu-item-content'>").insertAfter($(this));
      urlToLoad = window.location.href +  $(this).attr('href')
      $('#' + $(this).attr('id') + '+.menu-item-content').load(urlToLoad + ' .menu', function() {
        that.addClass('is-open')
      })
    } else {
      $(this).removeClass('is-open')
      $('#' + $(this).attr('id') + '+.menu-item-content').remove()
    }
  })
})
