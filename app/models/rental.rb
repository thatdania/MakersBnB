class Rental

  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :location, String
  property :price, Integer
  property :available, Boolean
  property :capacity, Integer
  property :description, Text

  belongs_to :user

  has n, :images

  def self.all_data
    data = []
    self.all.each do | ind |
      data <<  { id:       ind.id,
                 name:     ind.name,
                 location: ind.location,
                 price:    ind.price,
                 capacity: ind.capacity,
                 images:   ind.images.first,
                 description:   ind.description
    }
    end
  data
  end

  def self.individual(id)
    individual =[]
    individual << { user: self.first(id: id),
                   images: Image.first(rental_id: id)
                 }
     individual
   end
end
