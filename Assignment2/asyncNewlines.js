const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  const newlines = data.split('\n').length - 1;
  console.log(newlines);
}
);