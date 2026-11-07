(function(){
  var car=document.getElementById("car");
  if(!car)return;
  var track=car.querySelector(".track"),slides=[].slice.call(car.querySelectorAll(".slide")),dots=[].slice.call(car.querySelectorAll(".dot"));
  var i=0;
  function go(n){i=(n+slides.length)%slides.length;track.scrollTo({left:slides[i].offsetLeft-track.offsetLeft,behavior:"smooth"});mark();}
  function mark(){dots.forEach(function(d,k){d.classList.toggle("on",k===i);});}
  document.getElementById("prev").onclick=function(){go(i-1)};
  document.getElementById("next").onclick=function(){go(i+1)};
  dots.forEach(function(d,k){d.onclick=function(){go(k)}});
  track.addEventListener("scroll",function(){var w=track.clientWidth;var n=Math.round(track.scrollLeft/w);if(n!==i&&n>=0&&n<slides.length){i=n;mark();}},{passive:true});
  mark();
})();
