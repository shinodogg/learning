require 'dotenv'
require 'rubygems'
require 'algoliasearch'

Dotenv.load

Algolia.init(application_id: ENV['APPLICATION_ID'],
             api_key:        ENV['API_KEY'])
index = Algolia::Index.new('contact2')

index = Algolia::Index.new('contacts2')
batch = JSON.parse(File.read('contacts2.json'))
index.add_objects(batch)
