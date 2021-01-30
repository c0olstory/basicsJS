"use strict";

//1

function Product(name, price) {
   this.name = name;
   this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
   this.price = this.price - this.price * 0.25
}

// es 6

class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   make25PercentDiscount() {
      this.price = this.price - this.price * 0.25
   }
}

let product1 = new Product('товар 1', 100);
product1.make25PercentDiscount();

let product2 = new Product('товар 2', 200);
product2.make25PercentDiscount();

//2

function Post(author, text, date) {
   this.author = author;
   this.text = text;
   this.date = date;
}

Post.prototype.edit = function(text) {
   this.text = text
}

function AttachedPost(author, text, date) {
   Post.call(this, author, text, date);
   this.highlighted = false; 
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
   this.highlighted = true;
}

// es 6

class Post {
   constructor(author, text, date) {
      this.author = author;
      this.text = text;
      this.date = date; 
   }

   edit(text) {
      this.text = text
   }
}

class AttachedPost extends Post {
   constructor(author, text, date) {
      super(author, text, date);
      this.highlighted = true;
   }

   makeTextHighlighted() {
      this.highlighted = true;
   }
}

let post1 = new AttachedPost('автор 1', 'текст 1', 'дата 1');
post1.edit('измененный текст 1');
post1.makeTextHighlighted();
