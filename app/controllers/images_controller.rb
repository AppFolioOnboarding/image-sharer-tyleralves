class ImagesController < ApplicationController
  def create
    if image_params
      @image = Image.new(image_params)
      @image.save
      render json: @image
    else
      render json: { success: false }
    end
  end

  def show
    @images = Image.order(created_at: :desc)
    render json: @images
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end
end
