require 'bcrypt'

class User


  include DataMapper::Resource

  attr_reader :password
  attr_accessor :password_confirmation, :password_digest

  property :id, Serial
  property :name, String
  property :email, String
  property :encrypted_password, Text

  has n, :rentals

  def password=(password)
    @password = password
    self.encrypted_password = BCrypt::Password.create(password)
  end

  validates_confirmation_of :password
end
