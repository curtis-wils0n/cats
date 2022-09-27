const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) return callback(data);
    return callback(undefined);
  });
};

module.exports = breedDetailsFromFile;