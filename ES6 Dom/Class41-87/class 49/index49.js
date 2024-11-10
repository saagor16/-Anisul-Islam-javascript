// audio/video events
// canplay,play,playing,pause,progress,ended,volumechange,waiting


const video = document.querySelector('video');

video.addEventListener('canplay',function(){
    console.log('canplay')
});

video.addEventListener('play',function(){
    console.log('play')
});

video.addEventListener('playing',function(){
    console.log('playing')
});

video.addEventListener('pause',function(){
    console.log('pause')
});

video.addEventListener('progress',function(){
    console.log('progress')
});

video.addEventListener('ended',function(){
    console.log('ended')
});

video.addEventListener('volumechange',function(){
    console.log('volumechange')
});

video.addEventListener('waiting',function(){
    console.log('waiting')
});