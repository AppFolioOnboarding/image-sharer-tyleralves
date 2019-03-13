require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should create new image' do
    assert_difference('Image.count') do
      post images_url, params: {
        image: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Yosemite_El_Capitan.jpg'
        }
      }
    end
  end
end
