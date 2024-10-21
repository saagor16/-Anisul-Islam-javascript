// FocusEvent Object
// <br> , <Head>,<title>,<html>,<iframe>,<meta>,<param>,<script>,<style>,<base>,<bdo>

//1. onblur
//2. onfocus
//3. onfocusin
//4. onfocusout

const input = document.querySelector('input');
input.addEventListener('blur',function(){
    console.log('blur is Blur');
    input.style.backgroundColor="transparent";
    input.style.padding="0rem";
})

input.addEventListener('focus',function(){
    console.log('focus is focus');
    input.style.backgroundColor="red";
    input.style.padding="2rem";
})

// input.addEventListener('focusin',function(){
//     console.log('focusin is focusin')
// })

// input.addEventListener('focusout',function(){
//     console.log('focusout is focusout')
// })

