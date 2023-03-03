puts "🌱 Seeding spices..."

# Seed your database here

puts "Deleting old data..."
Product.destroy_all
Review.destroy_all




puts "Creating products..."
product1 = Product.create(
      title: "Mens Slim Fit T-Shirts ",
      price: 500,
      description: "Slim-fitting style, contrast raglan long sleeve",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")

product2 = Product.create(
    title: "Mens Casual Slim Fit",
    price: 400,
    description: "The color could be slightly different between on screen and in practice.",
    category: "men clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg")

product3 = Product.create(
    title: "Mens Cotton Jacket",
    price: 1000,
    description: "Great outerwear jackets for Spring/Autumn/Winter",
    category: "mens clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg")

product4 = Product.create(
    title: "Snowboard Winter Coats",
    price: 700,
    description: " Skin Friendly, keep you warm in cold weather.",
    category: "womens clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg")

product5 = Product.create(
    title: " Removable Hooded ",
    price: 1200,
    description: " Faux leather material for style and comfort ",
    category: "women clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg")

product6 = Product.create(
    title: "Women Solid Short Sleeve ",
    price: 800,
    description: " Lightweight fabric with great stretch for comfort",
    category: "women clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
)

product7 = Product.create( 
    title: "Women Short Sleeve ",
    price: 700,
    description: "Machine Wash & Pre Shrunk for a Great Fit",
    category: "women clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg")

product8 = Product.create( 
    title: " Womens T Shirt Short",
    price: 350,
    description: "The fabric is soft and has some stretch.",
    category: "women clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg")

product9 = Product.create(
    title: "Kicks",
    price: 2000,
    description: "Ya Kuvaa",
    category: "Mens Clothing",
    image: "https://www.wipo.int/export/sites/www/wipo_magazine/images/en/2020/2020_03_art_5_5_845.jpg")



puts "Creating reviews..."

review1 = Review.create(rating: 4, comment: "Loved packaging.", product_id: product1.id)
review2 = Review.create(rating: 4.2, comment: "Loved fitting.", product_id: product2.id)
review3 = Review.create(rating: 3.5, comment: "Loved fit.", product_id: product3.id)
review4 = Review.create(rating: 4.7, comment: "Perfect fit.", product_id: product4.id)
review5 = Review.create(rating: 3.9, comment: "Loved service.", product_id: product5.id)
review6 = Review.create(rating: 2.5, comment: "Highly recommend.", product_id: product6.id)
review7 = Review.create(rating: 3.8, comment: "Time saving.", product_id: product7.id)
review8 = Review.create(rating: 5, comment: "Perfect clothing.", product_id: product8.id)
review9 = Review.create(rating: 4.1, comment: "Good customer service.", product_id: product9.id)






puts "Seeding done!"

puts "✅ Done seeding!"

