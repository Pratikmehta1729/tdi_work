const fs = require('fs')

fs.readFile('./Json/test-data-output-stream.json', 'utf8', (err, fileContents) => {
  if (err) {
    console.error(err)
    return
  }
  try {
    const data = JSON.parse(fileContents)
  } catch(err) {
    console.error(err)
  }

   console.log(data[5]);

})
