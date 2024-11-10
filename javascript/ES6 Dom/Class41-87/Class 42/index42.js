document
  .querySelector("button")
  .addEventListener("click", function() {
    alert("hello");
});

var myVar =document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
  myVar.classList.add("my-style")
});
myVar.addEventListener("mouseout",function(){
  myVar.classList.remove("my-style")
});
