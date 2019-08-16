alert ("Test");

// ### Problem 1:
//
// Put the start of your program in a main function. Create a class for Books with name, rating, genre, and author. Create 3 instances of Books and put them in an array. Afterwards print each one in the format below:
//     ```
// The book [BOOK NAME] has [RATING] stars!!!
// ```

class Books
{
    constructor(name, rating, genre, author)
    {
        this.name = name;
        this.rating = rating;
        this.genre = genre;
        this.author = author;
    }
}

function main(){ // PLEASE check you code bloack. This DID NOT run at all just bc of a syntax error
    var name =[];
    // you did not create 3 instances of the class
    // let rating=[1,2,3];

    name.forEach( // a forEach function will only fun the function for each item in your array. You array is empty so the function will not run at all. You could have manually pushed each object into the arary
        function(eachElement)
        {
            name.push("the awakening","assata","go go"); // you are supposed to push 3 OBJECTS (instances of a class) into the array
        }
    )
    console.log(name);
};

main();