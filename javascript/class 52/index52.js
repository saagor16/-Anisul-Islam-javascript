// KeyboardEvent Object
// 1. keydown- pressing a key can repeat
// 2. keypress (may not supported bt some browser)
// 3.keyup
// some properties - key , keycode,code,shiftKey,ctlKey,repeat



const textarea = document.querySelector('textarea')

textarea.addEventListener('keydown',function(){
    console.log('keydown')
})

textarea.addEventListener('keypress',function(){
    console.log('keypress')
})

textarea.addEventListener('keydown',function(e){
    console.log('keydown');
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
    console.log(e.shiftKey);
    console.log(e.ctlKey);
    console.log(e.repeat);
})
