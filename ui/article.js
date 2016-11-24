function loadCommentForm(){
var commentFormHtml = `
<h4>Submit your valuable comment... </h4>
<text area id = "comment-text" rows = "10" cols = "100"></text area>
<input type = "submit" id = "submit" value = "submit"/>
`;
}
document.getElementById('comment-form').innerHTML = commentFormHtml;