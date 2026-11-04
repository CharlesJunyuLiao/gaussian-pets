const reduce=matchMedia('(prefers-reduced-motion: reduce)');
for(const video of document.querySelectorAll('video')){
 const button=video.parentElement.querySelector('button');
 const label=()=>{button.textContent=video.paused?'播放动画':'暂停动画';};
 button.addEventListener('click',async()=>{if(video.paused){try{await video.play();}catch{button.textContent='点击重试';}}else video.pause();});
 video.addEventListener('play',label);video.addEventListener('pause',label);
 video.addEventListener('error',()=>{button.textContent='视频加载失败';});
 if(!reduce.matches)video.play().catch(label);
}
