# index.rb
require "sinatra"
get "/" do
  "Hello #{ENV["HELLO"]}"
end
