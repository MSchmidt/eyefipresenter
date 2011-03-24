require 'rubygems'
require 'sinatra'
require 'config'
require 'erb'
require 'json'

get '/' do
  erb :index
end

get '/latest.js' do
  content_type :json
  photos = get_photos
  if photos.length > 0
    { :photo => photos.last }.to_json
  else
    404
  end
end

def get_photos()
  Dir.glob([File.join(BASEDIR, '*.JPG'), File.join(BASEDIR, '*.jpg')]).map do |file|
    file.gsub(File.join(BASEDIR, ''), '')
  end
end