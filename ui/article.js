var currentArticleTitle = window.location.pathname.split('/')[2];
function loadCommentForm(){
var commentFormHtml = `
<h4>Submit your valuable comment... </h4>
<text area id = "comment-text" rows = "10" cols = "50" placeholder = "Enter your comment here..."></text area>
<br/>
<input type = "submit" id = "submit" value = "submit"/>
<br/>
`;
document.getElementById('comment-form').innerHTML = commentFormHtml;
var submit = document.getElementById("submit");
submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done){
            if(request.status === 200){
                document.getElementById('comment-text').value=' ';
                loadcomments();
            }
            else{
                alert('Error! Could not submit comment');
            }
            submit.value = 'submit';
        }
    };
   var comment = document.getElementById('comment-text').value;
   request.open('POST','/submit-comment' + currentArticleTitle,true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({comment: comment}));
   submit.value = 'Submitting...';
};
}
function loadLogin(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done){
            if(request.status === 200){
                loadCommentForm(this.response.Text);
        }
        }
};
request.open('GET','/check-login',true)
request.send(null);
}