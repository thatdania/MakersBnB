require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require_relative 'rental'
require_relative 'user'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/makers_bnb_#{ENV['RACK_ENV']}")
DataMapper.finalize
