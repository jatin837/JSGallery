const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
btn.onclick = changeBrightness;
const overlay = document.querySelector('.overlay');
/* Looping through images */
for (let i = 1; i<=5; i++){
    img = document.createElement('img');
    imgUrl=`images/pic${i}.jpg`;
    img.src = imgUrl;
    img.onclick = newImage;
    thumbBar.appendChild(img);
    // thumbBar.children[i].onclick = displaySelectedImg;
}
function newImage(){
    displayedImage.src = this.src
}
/* Wiring up the Darken/Lighten button */
function changeBrightness() {
  
    classB = btn.getAttribute('class');
  
    if(classB == 'dark'){
        
        btn.setAttribute('class','light')
     
        btn.setAttribute('textContent', 'lighten')
        
        overlay.setAttribute('style', 'background-color:(0,0,0,0.5)')
        
    }
    else {
   
        btn.setAttribute('class','dark')
        btn.setAttribute('textContent', 'darken')
        overlay.setAttribute('style', 'background-color:(0,0,0,0.5)')
    }
}



