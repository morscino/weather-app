import { shallowMount } from '@vue/test-utils'
import WeatherView from '@/components/views/WeatherView.vue'
import TodayWeather from '@/components/views/Weathers/TodayWeather.vue'

describe('WeatherView.vue', () => {
  it('get forecast', () => {
    const created = jest.fn()
   // const currentCity = jest.fn()
    const buttonText = 'get forecast'
    const appName = 'Current Location'
    const wrapper = shallowMount(WeatherView, {
      global: {
        components: {
          'TodeyWeather': TodayWeather
        }
      },
      data() {
        return {
          buttonText,
        }
      },
      
      computed:{
        buttonEnabled(){
          return true
        },
        currentCity(){
          return {
            name:'dhdyddj'
          }
        }
      },
      created(){
        created()
      },
    })
    expect(wrapper.html()).toContain(buttonText);
    expect(wrapper.html()).toContain(appName);
    expect(wrapper.text()).toMatch(buttonText);
  })
})
