var react = require('react');
const fs = require('fs');

export default function Universe() {
    return(
        <div className="App padding">
            <div className="font header-content">
                My own curiosity rover🚀
            </div>
            {/* TODO : add the list of all files in universe directory here, 
            for some reason, fs doesn't seem to work */}
        </div>
    );  
};


function getAllFiles(dir_path) {
    var allFiles = [];
    fs.readdir(dir_path, (err, files) => {
        files.forEach(file => allFiles.push(file))
    });

    const listItems = allFiles.map((file) =>
        <li>{file}</li>
    );

    return (<ul>{listItems}</ul>);
}
