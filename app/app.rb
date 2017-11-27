ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require './app/models/data_mapper_setup'
require_relative './models/user'
require_relative './models/rental'

class MakersBnB < Sinatra::Base



end
