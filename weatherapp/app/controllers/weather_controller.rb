class WeatherController < ApplicationController

 
    def fetch_weather (url)
         RestClient::Request.execute(
                method: :get,
                url: url
            )
    end

    def create
       url = "http://api.openweathermap.org/data/2.5/weather?zip=" + params[:zip] +"&units=imperial&APPID=4e66533961b500086bf6bd7c37d4b847"
       @weather =  fetch_weather(url)
       weather = Rails.cache.read(params[:zip])
       if weather.nil?
          res_hash = JSON.parse(@weather)
          res_hash["cached"] = false
          @weather = res_hash.to_json
        Rails.cache.write(params[:zip],@weather,:expires_in => 30.minutes)
       else 
          res_hash = JSON.parse(@weather)
          res_hash["cached"] = true
          @weather = res_hash.to_json
       end
     render json: @weather
    end
end
