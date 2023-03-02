# THRIFT SHOP APP

This product app lets you organize products in cards.

## Technologies Used In This App

- JavaScript
- React
- Bootstrap
- Semantic UI
- Custom API Server


## How To Use

Install and run:

```sh
npm install

# start up your server
# start up react
npm start

```

## Features

### App

- Add to cart
- Remove from cart
- Get cart total summary
- Navigation shows app interface


### Products

- Create a product
- Delete a product
- Add a product
- Search products through search bar
- View individul products
- Add or remove the quantity of products in your cart before purchase.


### Reviews

- Create a new review
- Delete a current review
- Update a review








# THRIFT SHOP API

This  API is a simple web API where you make CRUD calls to a server to organize aproduct shop App.

## Technologies Used in API

- Ruby
- ActiveRecord
- SQLite3
- Rack

## How To Use

Install it and run:

```sh
bundle exec bundle install

# create migrations with activerecord
bundle exec rake db:migrate

# if you would like to use seed data
bundle exec rake db:seed

# start server
bundle exec rake server
```
Server uses port 9393 by default.


## Relationships within Database

### Products

- has many reviews.


### Reviews

- belongs to product.


## Example Calls You Can Make With API

### Products

You can make all CRUD calls for the products database.

- CREATE products
- GET/RETRIEVE all products
- GET/RETRIEVE individual product
- DELETE a product


#### Example: Retrieve All Products

Shows you products and all of the tasks associated with the project

```js

fetch("http://localhost:9292/products")
      .then((res) => res.json())
      .then((products) => setProducts(products))

// outpuut

{
products : [
  {
    "id": 1,
    "title": "Mens Slim Fit T-Shirts ",
    "price": 22,
    "description": "Slim-fitting style, contrast raglan long sleeve",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "created_at": "2023-02-28T19:43:09.548Z",
    "updated_at": "2023-02-28T19:43:09.548Z"
  },
  {
    "id": 2,
    "title": "Mens Casual Slim Fit",
    "price": 15,
    "description": "The color could be slightly different between on screen and in practice.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "created_at": "2023-02-28T19:43:09.562Z",
    "updated_at": "2023-02-28T19:43:09.562Z"
  },
  {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55,
    "description": "Great outerwear jackets for Spring/Autumn/Winter",
    "category": "mens clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "created_at": "2023-02-28T19:43:09.568Z",
    "updated_at": "2023-02-28T19:43:09.568Z"
  },
  {
    "id": 4,
    "title": "Snowboard Winter Coats",
    "price": 56,
    "description": " Skin Friendly, keep you warm in cold weather.",
    "category": "womens clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "created_at": "2023-02-28T19:43:09.574Z",
    "updated_at": "2023-02-28T19:43:09.574Z"
  },
  {
    "id": 5,
    "title": " Removable Hooded ",
    "price": 29,
    "description": " Faux leather material for style and comfort ",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "created_at": "2023-02-28T19:43:09.579Z",
    "updated_at": "2023-02-28T19:43:09.579Z"
  },
  {
    "id": 6,
    "title": "Women's Solid Short Sleeve ",
    "price": 9,
    "description": " Lightweight fabric with great stretch for comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "created_at": "2023-02-28T19:43:09.586Z",
    "updated_at": "2023-02-28T19:43:09.586Z"
  },
  {
    "id": 7,
    "title": "Women's Short Sleeve ",
    "price": 7,
    "description": "Machine Wash & Pre Shrunk for a Great Fit",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "created_at": "2023-02-28T19:43:09.592Z",
    "updated_at": "2023-02-28T19:43:09.592Z"
  },
  {
    "id": 8,
    "title": " Womens T Shirt Short",
    "price": 12,
    "description": "The fabric is soft and has some stretch.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "created_at": "2023-02-28T19:43:09.598Z",
    "updated_at": "2023-02-28T19:43:09.598Z"
  }
 
]
}
```



#### Example: Retrieve a Specific Product

Shows you all reviews with the product

```js
fetch("http://localhost:9292/products/1")
      .then((res) => res.json())
      .then((products) => setProducts(products))

//output

{
    "id": 1,
    "title": "Mens Slim Fit T-Shirts ",
    "price": 22,
    "description": "Slim-fitting style, contrast raglan long sleeve",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "reviews": [
      {
        "id": 1,
        "comment": "Loved packaging.",
        "rating": 4
      }
    ]
  }
```


### Reviews

You can make all CRUD calls for the reviews database.

- CREATE reviews
- GET/RETRIEVE all reviews
- DELETE a review
- ADD a review
- UPDATE a review

```js
const reviewData = {comment: newComment,rating: newRating, product_id : id}


    fetch(`http://localhost:9292/reviews`, {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(reviewData),
     })

     //output


     {
    "id": 9,
    "comment": "Good customer service.",
    "rating": 4,
    "product_id": 9,
    "created_at": "2023-02-28T19:43:09.661Z",
    "updated_at": "2023-02-28T19:43:09.661Z"
  }


  fetch(`http://localhost:9292/reviews/${pop.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((delRev) => {onReviewDelete(delRev)}); 

      //output

        {
    "id": 9,
    "comment": "Good customer service.",
    "rating": 4,
    "product_id": 9,
    "created_at": "2023-02-28T19:43:09.661Z",
    "updated_at": "2023-02-28T19:43:09.661Z"
  }
  ```



## Author
Derrick Momanyi

Github: @derrickmomanyi

## License
Copyright © 2023 Derrick Momanyi This project is MORINGA SCHOOL licensed.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License