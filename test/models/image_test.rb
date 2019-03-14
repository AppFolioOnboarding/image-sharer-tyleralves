require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'should save an image' do
    image = Image.new(url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Yosemite_El_Capitan.jpg')
    assert image.save
  end

  test 'should not create new image if invalid url' do
    image = Image.new(url: 'invalid_url')
    assert_not image.save, 'Saved image with invalid url'
  end

  test 'should not save image without a url' do
    image = Image.new
    assert_not image.save, 'Saved image without a url'
  end
end
