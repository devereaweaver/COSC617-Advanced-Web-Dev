/*  prints the number of files with
a given extension in a given directory. The first argument will be the path to
the directory we want to filter on (e.g. ‘/path/to/dir/’) and a file extension to
filter by as the second argument.
*/

const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = process.argv[3];

if (!dirPath || !fileExt) {
  console.error('Usage: node asyncFileCount.js <directory> <file_extension>');
  process.exit(1);
}

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    process.exit(1);
  }

  // Filter files by extension
  const filteredFiles = files.filter(file => path.extname(file) === fileExt);
  
  console.log(filteredFiles.length);
});
