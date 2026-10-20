let books = [
    { id: 1, title: "Harry Potter Chamber of Secrets", author: "J.K Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Hunger Games", author: "Suzanne Collins" },
    { id: 4, title: "The Fault in Our Stars", author: "John Green" },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 6, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 8, title: "Murder on the Orient Express", author: "Agatha Christie" },
    { id: 9, title: "The Da Vinci Code", author: "Dan Brown" },
    { id: 10, title: "Dune", author: "Frank Herbert" },
    { id: 11, title: "The Shining", author: "Stephen King" },
    { id: 12, title: "Dracula", author: "Bram Stoker" },
    { id: 13, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 14, title: "The Book Thief", author: "Markus Zusak" },
    { id: 15, title: "The Kite Runner", author: "Khaled Hosseini" },
    { id: 16, title: "The Martian", author: "Andy Weir" },
    { id: 17, title: "The Silent Patient", author: "Alex Michaelides" },
    { id: 18, title: "Gone Girl", author: "Gillian Flynn" },
    { id: 19, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    { id: 20, title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien" },
    { id: 21, title: "Little Women", author: "Louisa May Alcott" },
    { id: 22, title: "The Notebook", author: "Nicholas Sparks" },
    { id: 23, title: "It", author: "Stephen King" },
    { id: 24, title: "The Time Machine", author: "H.G. Wells" },
    { id: 25, title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle" },
    { id: 26, title: "The Midnight Library", author: "Matt Haig" },
    { id: 27, title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { id: 28, title: "Life of Pi", author: "Yann Martel" },
    { id: 29, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
    { id: 30, title: "Atomic Habits", author: "James Clear" }
];

const port = 3000;

const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to library management rest api");
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/{:id}', (req, res) =>{
    var id = req.params.id || '';
    res.send(books[id - 1]);
});

app.post('/books', (req, res) =>{
    let data = req.body;
    const dataF = {
        id: Math.max(0, ...books.map(b=> b.id)) + 1,
        title: data.title,
        author: data.author
    };
    books.push(dataF);
    console.log(books);
    res.send(`Successfully added`);
});

app.delete('/books/{:id}', (req, res)=> {
    const id = Number(req.params.id);
    const index = books.findIndex(book=> book.id == id);

    if(index == -1) return res.send("book not found");

    books.splice(index, 1);
    console.log(books);
    res.send(`Book deleted with id ${id}`);
});

app.listen(port, ()=> {
    console.log(`Listening on port: ${port}`);
});