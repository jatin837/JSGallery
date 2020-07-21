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
  
  
    if(btn.class === 'dark'){
        
        btn.class='light';
     
        btn.textContent = 'lighten';
        
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        
    }
    else {
        btn.class='dark';
     
        btn.textContent = 'darken';
        
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}



