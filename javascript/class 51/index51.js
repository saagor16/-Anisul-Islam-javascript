//DOM Event | MouseEvent -<html>,<head>,<meta>,<title>,<br>,<style>,<script>,<iframe>,<param>,<base>,<bdo>
//1. onCLick
//2. ondblclick
//3. onmousedown
//4. onmouseup
//5. onmouseenter
//6. onmouseleave
//7. onmousemove
//8. onmouseover

console.clear()
const div = document.querySelector("div");
console.log(div);


// 1. onClick
div.addEventListener('click', function(e) {
    console.log('click');
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    console.log(e.target.innerText);
});

// 2. ondblclick
div.addEventListener('dblclick', function() {
    console.log('dblclick');
});

// 3. onmousedown
div.addEventListener('mousedown', function() {
    console.log('mousedown');
});

// 4. onmouseup
div.addEventListener('mouseup', function() {
    console.log('mouseup');
});

// 5. onmouseenter
div.addEventListener('mouseenter', function() {
    console.log('mouseenter');
});

// 6. onmouseleave
div.addEventListener('mouseleave', function() {
    console.log('mouseleave');
});

// 7. onmousemove
div.addEventListener('mousemove', function(e) {
    // console.log('mousemove');
    // console.log("clientX= " = e.clientX + ", clientY= "+e.clientY);
    // console.log("offsetX= " = e.offsetX + ", offsetY= "+e.offsetY);
});

// 8. onmouseover
div.addEventListener('mouseover', function() {
    console.log('mouseover');
});



const buttons = document.querySelectorAll('.btn');

// Iterate over each button and add the event listener
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        console.log('clicked');
    });
});
