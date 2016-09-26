console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'Super !!';
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
 marginLeft = marginLEft+10;
 img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
    
   var interval = setInterval(moveRight,100);
    
};
