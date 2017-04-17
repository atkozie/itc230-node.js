let books = [
    {title:"1984", author:"george orwell", genre:"science fiction", pubdate:1955},
    {title:"it", author:"stephen king", genre:"horror", pubdate:1985},
    {title:"moby dick", author:"herman melville", genre:"fiction", pubdate:1865}
];
//construct a list of books using key-value pairs.

exports.get = (title) => {
    return books.find((item) => {
        console.log(item);
        return item.title == title;
    });
}