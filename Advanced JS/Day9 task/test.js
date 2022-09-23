var Box = function(h,w,l,mat,c){
    this.height = h;
    this.width = w;
    this.length = l;
    this.material = mat;

    this.content = c;

    this.booksNum = function(){
        return this.content.length;
    }

    this.deleteBook = function(tit){
        for(var j=0; j < this.content.length; j++){
            if(this.content[j].title == tit){
                this.content.splice(j,1);
            }
        }
    }
}


// var book = (function(title,chaptersNum,auth,pagesNum,puplisher,copies){
//     this.title = title;
//     this.numOfChapters = chaptersNum;
//     this.author = auth;
//     this.numOfPages = pagesNum;
//     this.puplisher = puplisher;
//     this.numOfCopies = copies;

//     var c=0;

//     return function (){
//         this.count = ++c;
//         console.log(this.count);
//     }
// })();

var book = function(tit,chaptersNum,auth,pagesNum,puplisher,copies){
    this.title = tit;
    this.numOfChapters = chaptersNum;
    this.author = auth;
    this.numOfPages = pagesNum;
    this.puplisher = puplisher;
    this.numOfCopies = copies;

    book.count++;

    book.countBooksNum = function(){
        return book.count;
    }

    // book.prototype.addCount();
};

// book.prototype.count = 0;

// book.prototype.addCount = function() {
//     return this.count++;
// };


book.count=0;

var book1 = new book("hope",7,"john",340,"mark",3);

// newBox.addBook(book1);

var book2 = new book("smile",4,"sara",280,"mohamed",2);
// newBox.addBook(book2);

var book3 = new book("web developing",6,"soha",500,"ali",3);
// newBox.addBook(book3);

var book4 = new book("web developing",6,"soha",500,"ali",3);
var book5 = new book("web developing",6,"soha",500,"ali",3);


var newBox = new Box(200,100,300,"cartoon",[book1,book2,book3]);

/**b */
console.log(`The number of books = ${newBox.booksNum()}`);

/**c */
newBox.deleteBook("smile");

/**d */
console.log(book.count);
console.log(book.countBooksNum());

// console.log(book.addCount());