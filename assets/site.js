document.documentElement.classList.add("js");
(function(){
  var tabs=[].slice.call(document.querySelectorAll(".tab")),panels=[].slice.call(document.querySelectorAll(".tabpanel"));
  if(!tabs.length)return;
  function show(name){
    tabs.forEach(function(t){t.classList.toggle("on",t.getAttribute("data-tab")===name)});
    panels.forEach(function(p){p.classList.toggle("on",p.id==="tab-"+name)});
    if(history.replaceState)history.replaceState(null,"",name==="server"?"#server":location.pathname);
  }
  tabs.forEach(function(t){t.addEventListener("click",function(){show(t.getAttribute("data-tab"))})});
  [].slice.call(document.querySelectorAll("a[data-tab]")).forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();show(a.getAttribute("data-tab"));window.scrollTo({top:0,behavior:"smooth"})})});
  if(location.hash==="#server")show("server");
})();
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
