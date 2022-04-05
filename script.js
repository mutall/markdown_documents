//Define the specific file to obtain 
const doc = "event.md";
//
//Process the file to obtain the required output
async function run() {
    //
    //Get the file
    let markdown = await fetch(doc);
    //
    //Process the file as text
    let content = await markdown.text();
    //
    //Pass the text file to markdownjs processor
    document.getElementById('content').innerHTML = marked.parse(content);
}
//
//
async function match() {
    //
    //Open the file to be processed as a string
    const markdown = await fetch(doc);
    //
    //Save the content as a string
    const content = await markdown.text();
    //
    //Search the file for the input parameters
    //const check = /#{1,}\s\d?\W?\s?\d?\s?.{1,}/g;
    const check = /#\s\d?\W?\s?\d?\s?.{1,}/g;
    //
    //Insert the result of the match into an array
    const input = content.match(check);
    //
    //Get the navigation and convert them to string
    const headers = input.join(",");
    //
    //Remove the trailing symbols to create text
    const links = headers.replaceAll("# ", "");
    const unset = links.replaceAll(". ", "-");
    const replace = unset.replaceAll(" ", "-");
    //
    //
    //Clean the headers to obtain the anchor tags references
    const hashed = headers.replaceAll("# ", "#").replaceAll("(", "").replaceAll(")", "");
    const dirtyNav = hashed.replaceAll(".", "").replaceAll(":", "");
    const dashed = dirtyNav.replace(/\s/g, "-");
    //
    //Convert the text to lower-case
    const result = dashed.toLowerCase();
    //
    //Recreate the array of the text values
    const inputs = links.split(",");
    //
    //Recreate the array of the reference values
    const inputsId = result.split(",");
    //console.log(inputs);
    //console.log(inputsId);
    //
    //Populate the Navigation bar with the anchor texts
    inputs.forEach(row => {
        //
        //Destructure the array
        const { inputs } = row;
        //
        // Obtain the element to create the anchor tags
        const value = document.getElementById('navigation');
        //
        // Create the anchor tags
        const anchor = document.createElement('a');
        //
        // Create the reference text for the anchortags
        const data = document.createTextNode(row);
        //
        // Set the attributes for the anchor tags
        anchor.setAttribute('href', row);
        //
        //Populate the anchor tags with the relevant data
        anchor.appendChild(data);
        //
        //Populate the anchor tags with their attributes
        value.appendChild(anchor);

    });
    //
    //Populate the anchor texts with the proper anchor links
    inputsId.forEach(navigation => {
        //
        //Destructure the array
        const { inputs } = navigation;
        //
        // Obtain the element to create the anchor tags
        const data = document.getElementById('navigation');
        //
        //Obtain the anchor tags
        const anchor = document.querySelector('#navigation a');
        //
        anchor.setAttribute('href', navigation);
        //
        //Populate the anchor tags with their attributes
        data.appendChild(anchor);
    });
    //
    //Get the title of the article
    const heading = inputs[0];
    //
    //Convert the value to a string
    const title = heading.toString();
    //
    //Get the number of words inside the element
    const words = title.match(/(\w+)/g).length;
    //
    //Adjust the headings to prevent overflowing
    if (words > 5) {
        const header = document.getElementById('navigation');
        //
        //Replace the class reference
        header.classList.replace('navigation', 'wrapper');
    }
}
match();
run();