function loadCommentForm(){
var commentFormHtml = `
<h4>Submit your valuable comment... </h4>
<text area id = "comment-text" rows = "10" cols = "50"></text area>
<br/>
<input type = "submit" id = "submit" value = "submit"/>
<br/>
`;
}
document.getElementById('comment-form').innerHTML = commentFormHtml;