const reduce=matchMedia('(prefers-reduced-motion: reduce)');
for(const video of document.querySelectorAll('video')){
 const button=video.parentElement.querySelector('button');
 const label=()=>{button.textContent=video.paused?'Play animation':'Pause animation';};
 button.addEventListener('click',async()=>{if(video.paused){try{await video.play();}catch{button.textContent='Click to retry';}}else video.pause();});
 video.addEventListener('play',label);video.addEventListener('pause',label);
 video.addEventListener('error',()=>{button.textContent='Video unavailable';});
 if(!reduce.matches)video.play().catch(label);
}
