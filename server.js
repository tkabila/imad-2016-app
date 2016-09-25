var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
   ` article-one`:{

var articleOne = {
    title:`Article One|tkabila`,
    heading:`Article One`,
    date:`Sep 5,2016`,
    content:`<p>
                              This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.
                         </p>
                         <p>
                              This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.
                           </p>
                           <p>
                              This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.This content is created for Article one.
                              </p>`

},
    `article-two`:{ 
        var articleTwo = {
        title:`Article Two|tkabila`,
    heading:`Article Two`,
    date:`Sep 10,2016`,
    content:`<p>
                              This content is created for Article two.
                              </p>`
                             
                 
                 },
    `article-three`:{
               var articleThree = {
        title:`Article Three|tkabila`,
    heading:`Article Three`,
    date:`Sep 15,2016`,
    content:`<p>
                              This content is created for Article two.
                              </p>`
                             
                 
                
    }
     
};


function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate =`
<html>
<head>
    <title>
        ${title}
        </title>
        <meta name = "viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
    <body>
        <div class="container">
            
            
        <div>
            <a href ="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
                </h3>
                <div>
                    ${date}
                    </div>
                    ${content}
                        </div>
        </body>
</html>

`
;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get(`/:article-one`,function(req,res){
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]);
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
