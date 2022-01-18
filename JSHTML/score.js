//<![CDATA[
/* external.js */
var doc, bod, M, I, S, Q, score = 0, addScore, drawScore; // for use on other loads
addEventListener('load', function(){ // make yourself a tiny library
doc = document; bod = doc.body;
M = function(tag){
  return doc.createElement(tag);
}
I = function(id){
  return doc.getElementById(id);
}
S = function(selector, within){
  var w = within || doc;
  return w.querySelector(selector);
}
Q = function(selector, within){
  var w = within || doc;
  return w.querySelectorAll(selector);
}
addScore = function(){
  return ++score;
}
var canvas = I('canvas'), ctx = canvas.getContext('2d'), add = I('add');
ctx.font = '16px Arial'; ctx.fillStyle = 'red';
drawScore = function(){
  ctx.clearRect(0, 0, 160, 90); ctx.fillText('Score: '+score, 8, 20);
}
//add.onclick = function(){
  //addScore(); drawScore();// other functions or code here
//};
}); // end load
//]]>