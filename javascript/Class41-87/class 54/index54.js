// ClipboardEvent object
// oncopy
// oncut
// onpaste

const input = document.querySelector('input')
const p = document.querySelector('p')

input.addEventListener('copy',function(){
    console.log('you have copied');
    p.innerText = "you have copied";
})

input.addEventListener('cut',function(){
    console.log('you have cut');
    p.innerText = "you have cut";
})

input.addEventListener('paste',function(){
    console.log('you have paste');
    p.innerText = "you have paste";
})


