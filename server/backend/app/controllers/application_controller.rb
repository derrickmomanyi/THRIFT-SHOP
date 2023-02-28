class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/products' do    
    products = Product.all   
    products.to_json
  end

  get '/products/:id' do
    product = Product.find(params[:id])
    product = Product.all
    
    product.to_json(include: { reviews: { include: :user } })

    product.to_json(only: [:id, :title, :price, :description, :category, :image], include: {
      reviews: { only: [:rating, :comment], include: {
        user: { only: [:name] }
      } }
    })
  end

end
