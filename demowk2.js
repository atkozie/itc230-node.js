/* let books = ["1984", 
             "it", 
             "dune", 
             "moby dick"]; 
//construct a list of books. This list is full of strings.
*/


let books = [
    {title:"1984", author:"george orwell", genre:"science fiction", pubdate:1955},
    {title:"it", author:"stephen king", genre:"horror", pubdate:1985},
    {title:"moby dick", author:"herman melville", genre:"fiction", pubdate:1865}
];
//construct a list of books using key-value pairs.

let get = (title) => { //define a function called "get"
    return books.find((item) => {
        console.log(item);
        item.title == title;
    });
}

console.log(get("it"));
//pass whatever is entered here as a parameter into the get function above

module.export = { //define here what other modules need to be able to access
    
}

//console.log(books[1]);
//print it out to the console