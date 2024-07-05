// Create web server
var express = require('express');
var app = express();

// Set up a route for comments
app.get('/comments', function(req, res) {
    res.json([
        { id: 1, author: "Pete Hunt", text: "This is one comment" },
        { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
    ]);
});

// Start the server
app.listen(3000);
