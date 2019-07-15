require 'httparty'

class HomeflowClient
  API_KEY = ENV['HOMEFLOW_API_KEY']
  BASE_URL = ENV['HOMEFLOW_BASE_URL']

  def example_request(location)
    HTTParty.get("#{BASE_URL}/properties?api_key=#{API_KEY}&search[address]=#{location}")
  end
end
