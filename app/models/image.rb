require 'uri'

class Image < ApplicationRecord
  validates :url, presence: true
  validate :valid_url

  private

  def valid_url
    uri = URI.parse(url)

    uri.host.nil? && errors.add(:uri, 'Url must be valid')
  rescue URI::InvalidURIError
    errors.add(:uri, 'Url must be valid')
  end
end
