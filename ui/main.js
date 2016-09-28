//console.log('Loaded!');
//
var button = document.getElementById('counter');

button.onclick = function(){
    var request = new XMLHTTPRequest();
    span.innerHTML = counter.toString();
    request.onreadystatechange = function(){
     if(request.readystate===XMLHTTPRequest.Done){
         if(request.status === 200){
             var counter = request.responseText;
             var span = document.getElementById('id');
             span.innerHTML = counte.toString();
         }
     }    
        
    };
    request.open('GET','http://tkabila.imad.hasura-app.io/counter',true);
    request.send(null);
};