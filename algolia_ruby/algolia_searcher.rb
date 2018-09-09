require 'dotenv'
require 'rubygems'
require 'algoliasearch'

Dotenv.load

Algolia.init(application_id: ENV['APPLICATION_ID'],
             api_key:        ENV['SEARCH_KEY'])

index = Algolia::Index.new('contacts2')

puts index.search('jimmie').to_json
puts index.search('jimie').to_json
puts index.search('california paint').to_json
puts index.search('jimmie paint').to_json
