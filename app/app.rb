ENV['RACK_ENV'] ||= 'development'

require 'json'
require 'sinatra/base'
require './app/models/data_mapper_setup'
require_relative './models/user'
require_relative './models/rental'

class MakersBnB < Sinatra::Base

  get '/rental/new' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb :rental_new
  end

  post '/rental/new' do
    current_user = User.create(name: params[:user_name])

    Rental.create(name: params[:name], location: params[:location],
      price: params[:price], capacity: params[:capacity], available: true,
      user_id: current_user.id)
    redirect '/rental/list'
  end

  get '/rental/list' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    Rental.all.to_json
  end

  post '/rental/overview' do
    @id = params[:id]
    @rental = Rental.get(params[:id])
    "hello"
    p params
    erb :rental_overview
  end

  get '/welcome' do
    "Hello"
    erb :welcome
  end
end
