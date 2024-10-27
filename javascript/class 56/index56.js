// BOM(Browser object model)
// window object
// location object


console.clear();
console.log(window);
console.log(window.document);
console.log(window.location);

//href
console.log(location.href);

// protocol
console.log(location.protocol);

// hostname
console.log(location.hostname);

// port
console.log(location.port);

// pathname
console.log(location.pathname);

var locationDiv = document.querySelector(".location-div");
console.log(locationDiv);

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = location.port;

var p4 = locationDiv.children[3];
p4.textContent = location.hostname;

var p5 = locationDiv.children[4];
p5.textContent = location.pathname;

const visit = document.getElementById('visit');
visit.addEventListener('click',function(){
    location.assign("https://sagor-portfolio-two.vercel.app/")
})


