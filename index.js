function getFirstSelector(selector) {
 return document.querySelector(selector);

}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
   const rank = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i=0; i < rank.length; i ++) {
	  rank[i].innerHTML = (i + n).toString();
  }
}
