ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require './app/models/data_mapper_setup'
require_relative './models/user'
require_relative './models/rental'

class MakersBnB < Sinatra::Base

  get '/rental/new' do
    erb :rental_new
  end

  post '/rental/new' do
    p params

    current_user = User.create(name: params[:user_name])

    rental = Rental.create(name: params[:name], location: params[:location],
      price: params[:price], capacity: params[:capacity], available: true)

    current_user.rentals << rental
    current_user.save

    p current_user.rentals
  end

end
