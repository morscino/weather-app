import { createStore } from 'vuex'
import { helpers } from '@/helpers'
import axios from 'axios'
import { setTimeout } from 'core-js'

const BaseUrl = 'api.openweathermap.org'
const ApiKey = 'aac83767543fcb6bf21314448eb9e460'

export const store = createStore({
  state() {
    return {
      snackbarStatus:false,
      snackBarMessage:'',
      currentCity: {name:''},
      nextSevenDayWeather: [],
      todayWeather: {
        id: 0,
        temperature: 0,
        windSpeed: 0,
        humidity: 0,
        pressure: 0,
        maxTemp: 0,
        minTemp: 0,
        dateTime: '',
        sunrise: '',
        sunset: '',
        location: '',
        description: '',
        icon: '',
        showDetails: false,
        hasData: false,
      },
      
    }
  },
  getters: {
    getTodayWeather(state) {
      return state.todayWeather
    },
    getNextSevenDaysWeather(state) {
      return state.nextSevenDayWeather
    },
    getCurrentCity(state) {
      return state.currentCity
    },
    getSnaackBarStatus(state){
      return state.snackbarStatus
    },
    getSnackBarMessage(state){
      return state.snackBarMessage
    }
  },
  mutations: {
    getTodayWeather(state, data) {
      state.todayWeather.id = data.id
      state.todayWeather.dateTime = helpers.formatDateTime(data.dt)
      state.todayWeather.temperature = helpers.formatTemperature(data.main.temp)
      state.todayWeather.maxTemp = helpers.formatTemperature(data.main.temp_max)
      state.todayWeather.minTemp = helpers.formatTemperature(data.main.temp_min)
      state.todayWeather.sunrise = helpers.formatTime(data.sys.sunrise)
      state.todayWeather.sunset = helpers.formatTime(data.sys.sunset)
      state.todayWeather.windSpeed = helpers.formatWindSpeed(data.wind.speed)
      state.todayWeather.humidity = data.main.humidity
      state.todayWeather.pressure = data.main.pressure
      state.todayWeather.description = data.weather[0].description
      state.todayWeather.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      state.todayWeather.hasData = true
    },
    getSevenDaysWeather(state, data) {
      state.nextSevenDayWeather = []
      for (const weather of data.list) {
        let oneDayWeather = {
          id: weather.dt,
          showDetails: false,
          dateTime: helpers.formatDateTime(weather.dt),
          temperature: helpers.formatTemperature(weather.main.temp),
          maxTemp: helpers.formatTemperature(weather.main.temp_max),
          minTemp: helpers.formatTemperature(weather.main.temp_min),
          sunrise: helpers.formatTime(data.city.sunrise),
          sunset: helpers.formatTime(data.city.sunset),
          windSpeed: helpers.formatWindSpeed(weather.wind.speed),
          humidity: weather.main.humidity,
          pressure: weather.main.pressure,
          description: weather.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        }

        state.nextSevenDayWeather.push(oneDayWeather)
      }
    },
    setSnackBarStatus(state,message){
      state.snackbarStatus = true
      state.snackBarMessage = message

      setTimeout(()=>{
        state.snackbarStatus = false
      },3000)
      
    },
    getCurrentCity(state, data) {
      state.currentCity.name = `${data[0].name},${data[0].state}`
    },
    clearTodayWeather(state) {
      state.todayWeather = {}
    },
    clearNextSevenDaysWeather(state) {
      state.nextSevenDayWeather = []
    },
  },
  actions: {
    getTodayWeather(context, location) {
      axios.get(`https://${BaseUrl}/data/2.5/weather?q=${helpers.formatLocation(location)}&appid=${ApiKey}`).then((response) => {
        context.commit('getTodayWeather', response.data)
      }).catch((error) => {
        console.log(error);
        context.commit('setSnackBarStatus','no data found for this location')
      })
    },
    getNextSevenWeather(context, location) {
      axios.get(`https://${BaseUrl}/data/2.5/forecast?q=${helpers.formatLocation(location)}&appid=${ApiKey}`).then((response) => {
        context.commit('getSevenDaysWeather', response.data)
      }).catch((error) => {
        console.log(error);
        context.commit('clearNextSevenDaysWeather')
      })
    },
    getCurrentCity(context, coords) { // get a location's name with its co-ordinates
      axios.get(`https://${BaseUrl}/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&appid=${ApiKey}&exclude=local_names`).then((response) => {
        console.log(response.data)
        context.commit('getCurrentCity', response.data)
      }).catch((error) => {
        console.log(error);
      })
    }
  }
})
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API key}
