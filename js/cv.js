/// NAVEGACION
let navmob = document.getElementById("nav-mobile");
let nav = document.getElementById("navegacion");

navmob.addEventListener("click", function() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}) 

// CERRAR EN MOBILE AL HACER CLICK
if (window.innerWidth < 769) {
    let links = document.querySelectorAll("#navegacion a");
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            nav.style.display = "none"; 
            document.getElementById("navcheck").checked = false;
        });
    } 
}
//// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.classList.remove("active");
    } else {
      panel.style.display = "block";
      this.classList.add("active");
    }
  });
} 

//// KINET
var kinet = new Kinet({
acceleration: 0.06,
friction: 0.20,
names: ["x", "y"],
});

var circle = document.getElementById('circle');

kinet.on('tick', function(instances) {
circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
});

document.addEventListener('mousemove', function (event) {
kinet.animate('x', event.clientX - window.innerWidth/3);
kinet.animate('y', event.clientY - window.innerHeight/3);
});