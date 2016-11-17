function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

window.onload = function() {
  var COOKIE_NAME = 'visited';
  var visited = getCookie(COOKIE_NAME).split(',');
  console.log('visited', visited);

  function upgradeLink(link) {
    var slug = link.parentNode.getAttribute('href').replace(/[\.\/]/g, '');
    console.log(slug, visited.indexOf(slug));
    if (visited.indexOf(slug) !== -1) {
      link.className = 'visited'; 
    }
    link.parentNode.onclick = function(evt) {
      createCookie(COOKIE_NAME, visited.concat([ slug ]).join(','));
    };
  }

  var links = document.getElementsByTagName('li');
  for (var i=0; i<links.length; ++i) {
    var link = links[i];
    if (link.parentNode.tagName === 'A') {
      upgradeLink(link);
    }
  }
};
