class ApplicationController < Sinatra::Base
 
  
  # Add your routes here
  get '/products' do    
    products = Product.all   
    products.to_json
  end

  get '/products/:id' do
    product = Product.find(params[:id])
    product = Product.all
    
    product.to_json(include: :reviews)

    product.to_json(only: [:id, :title, :price, :description, :category, :image], include: {
      reviews: { only: [:id, :rating, :comment]}
  })
  end

  delete '/products/:id' do    
   product = Product.find(params[:id])    
   product.destroy   
   product.to_json
  end

  post '/products' do
    product = Product.create(
      title: params[:title],
      price: params[:price],      
      description: params[:description],
      category: params[:category],
      image: params[:image]
     
    )
    product.to_json
  end

  patch '/products/:id' do
    product = Product.find(params[:id])
    product.update(
      comment: params[:comment],
      rating: params[:rating]      
     
    )
    product.to_json
  end

  get '/reviews' do    
    reviews = Review.all   
    reviews.to_json
  end

  delete '/reviews/:id' do    
    review = Review.find(params[:id])    
    review.destroy   
    review.to_json
  end

  post '/reviews' do
    review = Review.create(
      comment: params[:comment],
      rating: params[:rating],      
      product_id: params[:product_id]
    )
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      comment: params[:comment],
      rating: params[:rating]
      
     
    )
    review.to_json
  end

end
