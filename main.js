"use strict";

//1

for (let i = 0; i <= 10; i++)  {
   if (i == 0) {
      console.log(i + " - это ноль")
   } else if (i % 2 == 0) {
      console.log(i + " - это четное число")
   } else if (i % 2 !== 0) {
      console.log(i + " - это нечетное число")
   }
}

//2

const post = {
   author: "John", //вывести этот текст
   postId: 23,
   comments: [
      {
         userId: 10,
         userName: "Alex",
         text: "lorem ipsum",
         rating: {
            likes: 10,
            dislikes: 2 //вывести это число
         }
      },
      {
         userId: 5, //вывести это число
         userName: "Jane",
         text: "lorem ipsum 2", //вывести этот текст
         rating: {
            likes: 3,
            dislikes: 1
         }
      },
   ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// 3

const products = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price: 1000,
   },
];

products.forEach(function discount(discountPrice) {
   discountPrice.price = discountPrice.price - discountPrice.price * 0.15;
   return discountPrice.price;
});

console.log(products)
  
// 4

const products = [
   {
      id: 3,
      price: 127,
      photos: [
         "1.jpg",
         "2.jpg",
      ]
   },
   {
      id: 5,
      price: 499,
      photos: []
   },
   {
      id: 10,
      price: 26,
      photos: [
         "3.jpg"
      ]
   },
   {
      id: 8,
      price: 78,
   },
];
  
const itemPhotos = products.filter(function (item) {
   if(item.photos !== undefined && item.photos.length !== 0) {
      return item;
   }
});

products.sort(function(a, b) {
   if (a.price > b.price) {
      return 1;
   } else {
      return -1;
   }
});

// 5

for(let i = 0; i < 9; i++, console.log(i)) {};

// 6

let message = "";

for(let i = 0; i < 20; i++) {
   if (i < 10) {
      message += "x";
      console.log(message);
   } else {
      message = message.slice(0, -1)
      console.log(message);
   }
};