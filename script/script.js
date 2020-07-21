const div1 = document.querySelector('#div1');
const div4 = document.querySelector('#div4');
let htmlOutput = ''

let myBooks = [];
class Book {
    constructor (bookId, bookName, bookAuthor, bookEdition, bookPrice, bookQuote, numberSales) {
        this.bookId = bookId;
        this.bookInfo = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookEdition: bookEdition,
            bookPrice: bookPrice
        };
        this.bookQuote = bookQuote;
        this.numberSales = numberSales;
        myBooks.push(this);
    }
};

let myNewBook01 = new Book('book01', 'Clube da Luta', 'Chuck Palahniuk', 'Ed. 01', 'R$29.99', 'Apenas depois de perder tudo é que você estará livre para fazer qualquer coisa – Tyler diz.', 175);
let myNewBook02 = new Book('book02', 'No Sufoco', 'Chuck Palahniuk', 'Ed. 01', 'R$18.20', 'Depois de descobrir que todas as coisas podem dar errado, sua vida se torna menos sobre viver e mais sobre esperar.', 147);
let myNewBook03 = new Book('book03', 'Monstros Invisíveis', 'Chuck Palahniuk', 'Ed. 01', 'R$39.99', 'Se a morte significasse sair do palco por tempo suficiente para trocar de roupa e voltar como um novo personagem ... Você desaceleraria? Ou aceleraria?', 116);
let myNewBook04 = new Book('book04', 'Sobrevivente', 'Chuck Palahniuk', 'Ed. 01', 'R$32.70', 'Uma garota liga e pergunta: \"Dói muito morrer?\" \"Bem, querida\", digo a ela, \"sim, mas dói muito mais continuar vivendo\".', 183);
let myNewBook05 = new Book('book05', 'Assombrado', 'Chuck Palahniuk', 'Ed. 01', 'R$28.50', 'Esse é o sonho americano: transformar sua vida em algo que você pode vender.', 105);
let myNewBook06 = new Book('book06', 'Snuff', 'Chuck Palahniuk', 'Ed. 01', 'R$31.90', 'O que você faz quando toda a sua identidade é destruída em um instante? Como você lida quando toda a sua história de vida acaba errada?', 79);
let myNewBook07 = new Book('book07', 'Diário', 'Chuck Palahniuk', 'Ed. 01', 'R$27.75', 'É tão difícil esquecer a dor, mas é ainda mais difícil lembrar a doçura. Não temos cicatrizes para mostrar felicidade. Aprendemos muito pouco da paz.', 201);
let myNewBook08 = new Book('book08', 'A Arte de Produzir Efeito Sem Causa', 'Lourenço Mutarelli', 'Ed. 01', 'R$30.99', 'Os lençóis cheiram a naftalina, a almofada foi impermeabilizada por uma camada de gordura humana. Sênior vai para o quarto, já passa da meia-noite.', 144);
let myNewBook09 = new Book('book09', 'O Cheiro do Ralo', 'Lourenço Mutarelli', 'Ed. 01', 'R$21.50', 'Vinha um forte cheiro de fossa que subia do ralo e invadia meu nariz. Invadia a sala toda. Cheiro de merda, é do ralo, afirmei. Acho que fiquei com vergonha de que ele pensasse que o cheiro vinha de mim.', 107);
let myNewBook10 = new Book('book10', 'Miguel e os Demônios', 'Lourenço Mutarelli', 'Ed. 01', 'R$31.75', 'Calor infernal. Dezembro. Interior de um Fiat Uno branco modelo 94. Rua Domingos de Morais, Vila Mariana. Fachadas se alternam.', 65);

myBooks.categories = ['Título', 'Autor', 'Edição', 'Preço'];

let populateTable = (bookCollection) => {
    htmlOutput = `<table>`;
    for (let i = 0; i < bookCollection.categories.length; i++) {
        htmlOutput += `
        <tr>
            <td>${bookCollection.categories[i]}</td>
        `     
        bookCollection.forEach((e, index) => {
            htmlOutput += `
            <td>${e.bookInfo[Object.getOwnPropertyNames(e.bookInfo)[i]]}</td>
            `
        })
        htmlOutput += `</tr>
        `
    }
    htmlOutput += `</table>`
};

populateTable(myBooks);
div1.innerHTML = htmlOutput;
let mySortedBooks = [];

const populateMostSold = (bookArraySource) => {
    mySortedBooks = [...bookArraySource].sort((a, b) => { 
        return b.numberSales - a.numberSales;
    });

    let mostSoldBooksHtmlOutput = '<h3>Livros mais vendidos:</h3>';

    for (let i = 0; i < 5; i++) {
        mostSoldBooksHtmlOutput += `
        <div class="book-quote">
            <p class="book-quote__text">${mySortedBooks[i].bookQuote}</p>
            <p class="book-quote__title">${mySortedBooks[i].bookInfo.bookName}</p>
        </div>
        `
    }
    return mostSoldBooksHtmlOutput;
}

div4.innerHTML = (populateMostSold(myBooks));
