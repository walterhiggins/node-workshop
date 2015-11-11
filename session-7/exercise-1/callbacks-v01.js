/* 
 session 7 exercise 1
 callbacks-v01.js
 Lists all files in the current directory 
 howing file size for files which are not directories
*/
var fs = require('fs');
var source = './';
fs.readdir(source, function(err, files){
  if (err) {
    console.log('Error finding files:' + err);
  } else {
    files.forEach( function( filename ){
      fs.stat( filename, function( err, stats ){
        if (err) {
          console.log('Stat error:' + err);
        } else {
          if ( stats.isFile() ){
            fs.readFile( filename, function( err, contents ){
              if (err){
                console.log('Read Error:' + err);
              } else {
                console.log(filename + ':' + contents.length);
              }
            });
          }
        }
      });
    });
  }
}); 
