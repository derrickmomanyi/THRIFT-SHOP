class Product < ActiveRecord::Base 
    has_many :reviews
    

    def print_all_reviews
        self.reviews.each {|review| review.print_review}

    end

    def average_rating
        self.reviews.average(:rating).to_f

    end

    def most_popular_product
        self.reviews.find_by(rating: highest_rating)
       
    end

 
end
