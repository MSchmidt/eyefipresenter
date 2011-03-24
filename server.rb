$LOAD_PATH.unshift File.expand_path(File.join(File.dirname(__FILE__), ".."))

require 'lib/ryfi'
require 'lib/eyefi'
require 'stringio'
require 'exifr'
require 'mini_magick'

require 'config'

# Register as many cards as you wish (accepts the card's MAC + upload key)
EyefiCard.register(CARD_MAC, CARD_KEY)

class MyApp < RyfiApp
    
  handle_photos_with :handle_photo
  
  def handle_photo(card, photo)
    EyefiCard.log.debug "Received new photo (#{photo.original_name}) shot with an #{photo.exif[:model]}."
    photo.save_with_original_name! File.join(File.dirname(__FILE__), ORIGINALDIR)
    photo.photo_fp.rewind
    image = MiniMagick::Image.read(photo.photo_fp)
    photo.exif[:orientation].transform_rmagick(image)
    image.combine_options do |c|
      c.resize IMGSIZE
      c.quality '80'
    end
    image.write File.join(BASEDIR, photo.original_name)
  end
  
end

# Server must be run on 59278 so that the card can reach it.
MyApp.run! :host => 'localhost', :port => 59278
