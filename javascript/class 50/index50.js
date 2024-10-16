//scroll, resize, toggle
//load ,unload


window.addEventListener('load',function(){
    console.log('load')
})

window.addEventListener('unload',function(){
    console.log('unload')
})

window.addEventListener('scroll',function(){
    console.log('scroll')
})

window.addEventListener('resize',function(){
    console.log('resize');
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;
    console.log(`height :${height},width:${width}`)
})


const details = document.querySelector("details");

details.addEventListener('toggle',function(e){
    console.log('toggle')
    console.log(e.target.open)
})