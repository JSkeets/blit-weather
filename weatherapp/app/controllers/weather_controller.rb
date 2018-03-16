class WeatherController < ApplicationController

    def index
     
        render json: response
    end

    def create

        url = "http://api.openweathermap.org/data/2.5/weather?zip=" + params[:zip] +"&APPID=4e66533961b500086bf6bd7c37d4b847"
    

 
        @weather = RestClient::Request.execute(
            method: :get,
            url: url
        )
        render json: @weather
    end

    def weather_params

    end
end
