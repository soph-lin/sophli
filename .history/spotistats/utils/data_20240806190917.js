import * as fs from 'fs';

function saveData(data, type) {
    let path = null;
    if (type === 'song data') path = './data/sample-song-data.json';
    else if (type === 'audio data') path = './data/sample-audio-data.json';
    else throw new Error(`Type ${type} not implemented`);

    const jsonData = JSON.stringify(data);
    fs.writeFile(path, data, (error) => {
        
    })
}

const data = JSON.stringify(user);

// writing the JSON string content to a file
fs.writeFile("data.json", data, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }

  console.log("data.json written correctly");
});