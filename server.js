var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticalOne = {
    
    title:  ' Artical-One|Yogesh Sahu',
    heading: 'Artical One',
    date: 'Aug 8 2017',
    content:`<p>
                    Hello This is artical one page for temp. Hello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for tempHello This is artical one page for temp.
                </p>`
    
};
var htmltemp=  `
    
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=divice-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            ${date}
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
  `; 


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two', function(req,res){
    
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/artical-three', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
