//console.log('Loaded!');
//
var buttom = document.getElementById(`counter`);
var counter =0;
button.onclick = function(){
  //  var request = new XMLHTTPRequest();
    counter =counter+1;
    var span = document.getElementById(`count`);
    span.innerHTML = counter.toString();
    
};