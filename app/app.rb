ENV['RACK_ENV'] ||= 'development'

require 'json'
require 'sinatra/base'
require './app/models/data_mapper_setup'
require_relative './models/user'
require_relative './models/rental'

class MakersBnB < Sinatra::Base

  enable :sessions

  get '/rental/new' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb :rental_new
  end

  post '/rental/new' do
    current_user = User.create(name: params[:user_name])

    @current_rental = Rental.create(name: params[:name], location: params[:location],
      price: params[:price], capacity: params[:capacity], available: true,
      user_id: current_user.id)
    @current_image = Image.create(source: params[:picture], rental_id: @current_rental.id)

    #  p ":::::::::::::" , Image.last.source
    # File.open(File.join(File.dirname(__FILE__), '..', 'uploads', params[:picture][:filename]), "w") do |f|
    # f.write(params[:picture][:tempfile].read)
    # end
        p "::::::::::::" , @current_rental.images.first.source
   "<img src='#{@current_rental.images.first.source}' style='width:220px; height:300px;'>"
    # redirect '/rental/list'
  end

  get '/rental/list' do
    headers 'Access-Control-Allow-Origin' => '*'
    content_type :json
    Rental.all.to_json
    Image.all.to_json
  end

  post '/rental/save' do
    session[:rental] = Rental.get(params[:id])
    redirect '/rental/overview'
  end

  get '/rental/current_view' do
    content_type :json
    session[:rental].to_json
  end

  get '/rental/overview' do
    erb :rental_overview
  end

  get '/welcome' do
    @image = Image.get(1)
    erb :welcome
  end
end
