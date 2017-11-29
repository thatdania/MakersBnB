class Rental

  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :location, String
  property :price, Integer
  property :available, Boolean
  property :capacity, Integer

  belongs_to :user

  has n, :images

end
