require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require_relative './rental.rb'
require_relative './user.rb'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/makers_bnb_#{ENV['RACK_ENV']}")
DataMapper.finalize
DataMapper.auto_upgrade! if ENV['RACK_ENV'] == 'test'
