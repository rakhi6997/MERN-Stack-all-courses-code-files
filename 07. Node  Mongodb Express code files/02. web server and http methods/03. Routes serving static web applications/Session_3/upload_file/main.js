const port = 3000;
http = require("http");
httpStatus = require("http-status-codes");


// // Step 1: Create an Upload Form  --> start1
/*
http.createServer((request, response) => {
     response.writeHead(httpStatus.StatusCodes.OK, {
    "Content-Type": "text/html"
    });
    response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    response.write('<input type="file" name="filetoupload"><br>');
    response.write('<br />')
    response.write('<input type="submit">');
    response.write('</form>'); 
    response.end();
}).listen(port);
*/
// end1
// Note : the above code cannot parse the uploaded file
// for that we would require to use formidable module

// before running step 2, comment everything from start1 to end1
// uncomment start2 to end2
//start2 
/*
const formidable = require('formidable');

http.createServer((request, response) => {
  if(request.url== '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(request, (err, fields, files) => {
        response.write('File Uploaded');
        response.end();
    });
} else {
        response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html"
        });
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"><br>');
        response.write('<br />')
        response.write('<input type="submit">');
        response.write('</form>'); 
        response.end();
    }
}).listen(port);
//end2
*/



// -------------------------
// step 3: Save the File as well rename it 
// In above code a file is successfully uploaded to the server, 
// but it is placed some where on a temporary folder 
// with some .tmp extension. So its difficult to trace it.

// The path to this directory can be found in the "files" object, 
// passed as the third argument in the parse() method's callback 
// function.

// In step 3 below we move the file to our projects uploads folder.
// Remember : to use the fs module, to rename the file.

// before running step 3, comment everything from start2 to end2
// uncomment start3 to end3

// start3
const formidable = require('formidable');
const fs = require('fs');

http.createServer((request, response) => {
  if(request.url== '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(request, (err, fields, files) => {
        let oldpath = files.filetoupload.path;
        let newpath = './uploads/' + files.filetoupload.name;
        fs.rename(oldpath, newpath, (err) => {
            if (err) throw err;  
            response.write('File Uploaded and moved');
            response.end();
        })
   });
} else {
        response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html"
        });
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"><br>');
        response.write('<br />')
        response.write('<input type="submit">');
        response.write('</form>'); 
        response.end();
    }
}).listen(port);
// end3

console.log(`The server has started 
and is listening on port number: ${port}`);