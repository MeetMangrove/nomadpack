var curators = document.getElementById('curators');
function toggleCurators() {
  curators.style.display = curators.style.display == 'none' ? 'block' : 'none';
}
var toggle = document.getElementById('js-curators-toggle').parentNode;
toggle.onmouseenter = toggle.onmouseleave = toggleCurators;

var tweetBtn = document.getElementById('btn-tweet');
tweetBtn.onclick = function(){
  tweetBtn.style.display = 'none';
  document.getElementById('btn-vote').style.display = 'inline';
  return true;
};
