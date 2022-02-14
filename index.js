function animateProgressBar() {
    let nodes = document.querySelectorAll('.progress');
   
   nodes.forEach((elm) => {
     setInterval(updateProgress, 100, elm); 
   });
 } 
 
 function updateProgress(elm) {
   if(elm.value < elm.max) {
   elm.value = elm.value+1;
   }
 }