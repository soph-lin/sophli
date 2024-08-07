// import fs from 'fs';

const saveAsSampleData = isLocalHost() && true; // Save as sample data.
// TODO: add gateway logic to spotistats.js, check if setting is "use my spotify"
// TODO x2: module imports/exports for all files
// TODO x3: update everything to node.js

export default function saveData(data, type) {
    if (!saveAsSampleData) return;
    console.log('saving data');

    let path = null;
    if (type === 'song') path = './data/sample-song-data.json';
    else if (type === 'audio') path = './data/sample-audio-data.json';
    else throw new Error(`Type ${type} not implemented`);

    const jsonData = JSON.stringify(data);
    fs.writeFile(path, jsonData, (error) => {
        if (error) throw error;
    })
}

function isLocalHost() {
    return location.hostname === "localhost" || location.hostname === "127.0.0.1";
}