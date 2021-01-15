export function getFileLinks() {
    var files = getFileNames(); 
    return files;
    var fileListComponent = files.map((file) => {
        <li>{file}</li>
    });

    return (<ul>{fileListComponent}</ul>);
}

/**
 * Gets the names of all the markdown files present in `../universe` directory.
 * require.context method requires all arguments to be passed as literals for some reason, will look into this later.
 */
const getFileNames = function() {
    var files = [];    
    require.context('../universe', false, /\.md$/)
        .keys()
        .map(file => {
            files.push('../universe/' + file.substr(2))
        });

    return files;
}
