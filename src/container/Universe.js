import * as Renderer from '../utils/Renderer.js';
var react = require('react');

export default function Universe() {
    return(
        <div className="App padding">
            <div className="font header-content">
                My own curiosity rover🚀
            </div>
            <div>
                <ul>
                    {Renderer.getFileLinks().map((file) => <li key={file}>{file}</li>)}
                </ul>
            </div>
        </div>
    );  
};

function getAllFiles() {
    var files = [];
    const markdownContext = require.context('../universe', false, /\.md$/);
    
    markdownContext.keys().map(file => {
        files.push('../universe/' + file.substr(2))
    });

    return files;
}
