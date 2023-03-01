class Review < ActiveRecord::Base 
    belongs_to :product

    def print_review
        puts "Review for #{self.product.title} : #{self.rating}. #{self.comment}"
    end

    def self.highest_rating
        self.maximum(:rating)
    end

    def self.lowest_rating
        self.minimum(:rating)
    end

    def self.most_popular_product
        puts "#{self.find_by(rating: highest_rating)}"
       
    end

    def self.least_popular_product
        self.find_by(rating: lowest_rating)
    end

   

   
end