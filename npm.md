# PUBLISHING A LIBRARY TO npm REGISTRY

This document entails the requirements and processes needed to create a projects package and be able to publish to the npm registry where the package becomes accessible via the npm installation command.

## 1. Open the Terminal

Check if npm is installed on your laptop, run this command in your favourite editor terminal .i.e `VS code`:  
   > npm -v

The output is as below.

   >8.4.0

## 2. Create a Directory

Let’s create a folder that’s going to hold our package’s source code. In the terminal:  

   > //This will create, and navigate into the `mutall-data` directory  
   > $  mkdir mutall-data  
   > $  cd mutall-data

## 3. Initializing a npm Package

Running npm init will ask you a few setup questions:

   > $ npm init

The result is as follows:

> This utility will walk you through creating a package.json file.  
> It only covers the most common items, and tries to guess sensible defaults.  
> See `npm help init` for definitive documentation on these fields
> and exactly what they do.  
> Use `npm install <pkg>` afterwards to install a package and
> save it as a dependency in the package.json file.
>  
> Press ^C at any time to quit.
> package name: (mutall-data)  
> version: (1.0.0)  
> description: mutall data librarys  
> entry point: (index.js)  
> test command:  
> git repository:  
> keywords:  
> author: francis nyakundi  
> license: (ISC)  
> About to write to /home/alchemis/Desktop/projects/mutall-data/package.json:  
> {  
> "name": "mutall-data",  
> "version": "1.0.0",  
> "description": "mutall data library's",  
> "main": "index.js",  
> "scripts": {  
> "test": "echo \"Error: no test specified\" && exit 1"  
> },  
> "author": "francis nyakundi",  
> "license": "ISC"  
> }  
> Is this OK? (yes)  

The generated package.json is as follows

                                  package.json

>{  
 > "name": "mutall-data",  
 > "version": "1.0.0",  
 > "description": "mutall data library's",  
 > "main": "index.js",  
 > "scripts":  
>{  
 > "test": "echo \"Error: no test specified\" && exit 1"  
>},  
 > "author": "francis nyakundi",  
 > "license": "ISC"  
>}  

## Package.json file  

This is like a guide as it contains all the info about the project.  The package.json file contains all of the descriptive metadata about the project, and all of the dependencies needed to run successfully.  

With this information, npm bundles the package for easy downloading & running by other users. One can edit _package.json_ to change the description, and author information.  
The “main” field is the file path to the JavaScript code. When someone installs the package, this JavaScript file will be used.  

## Add a test file  

Create a new file from the tool bar.  

 `index.js`  

Type the following in the editor,  

                                   index.js  
 > module.exports = function(){  
    console.log("Welcome to mutall data")  
    return ;  
 };

Include documentation for your package to guide others on know how to use it. The README file is always used for this purpose.  

## Creating a README file  

In the root directory of the project, create a new file from the tool bar and name it _README_.

> //put some text into README  
> mutall-data. Welcome to mutall!  

## Publish

Currently, this is what the file directory for _mutall-data_ looks like, this is the basic structure of a npm package.  

   > mutall-data  
   > |_index.js  
   > |_README  
   > |_Package.json  

<span style="color:magenta">In order to publish the package,We'll need an account on the npm registry website. Also use a package name that hasn’t been used on the registry already.</span>  

To login, from the CLI run:  

 `npm login`

Afterwards, provide the username, password and finally email.  
Now that we have created and customized our package, let’s publish it!  

   > $ npm publish  

Thats it the package is published to the npm registry.  

## Summary

To conclude, there are only 4 steps to go from zero-to-published:  

- Initialize: `npm init`  
- Add source code: `index.js`
- Add a `README`  
- Publish: `npm publish`  
  

Finally when someone wants to install this package, they will run the following on the terminal.  

   > $ npm install mutall-data  

This will download, and install any dependencies needed for your packages in required software projects.

## npm Registry Commands  

| Action                                      | Command                        |
| ------------------------------------------- | ------------------------------ |
| Login to the npm registry                   | `npm login`                    |
| Publish packages                            | `npm publish`                  |
| Unpublish packages                          | `npm unpublish`                |
| Change profile settings(Including password) | `npm profile set`              |
| Change package visibility                   | `npm access public/restricted` |



```markdown
         AUTHOR:  

                 Francis Nyakundi
                 Developer.

```
