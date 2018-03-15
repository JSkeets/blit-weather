class WeatherController < ApplicationController

    def index
        response = RestClient::Request.execute(
            method: :get,
            url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4e66533961b500086bf6bd7c37d4b847'
        )
        render json: response
    end
end
