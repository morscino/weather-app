import { shallowMount } from '@vue/test-utils'
import WeatherView from '@/components/views/WeatherView.vue'
import TodayWeather from '@/components/views/Weathers/TodayWeather.vue'
import NextFiveDaysWeather from '@/components/views/Weathers/NextFiveDaysWeather.vue'

describe('WeatherView.vue', () => {
  it('contains the button text', () => {
    const created = jest.fn()

    const buttonText = 'get forecast'

    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    expect(wrapper.html()).toContain(buttonText);

  })
})

describe('WeatherView.vue', () => {
  it('contains input placeholder', () => {
    const created = jest.fn()

    const placeholder = 'Current Location'
    const wrapper = shallowMount(WeatherView, {

      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'dhdyddj'
          }
        }
      },
      created() {
        created()
      },
    })
    expect(wrapper.html()).toContain(placeholder);
  })
})

// confirm classes
describe('WeatherView.vue', () => {
  it('contains clasess', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    expect(wrapper.classes()).toContain('mt-10')
    expect(wrapper.classes('mt-10')).toBe(true)

  })
})
// confirms component
describe('WeatherView.vue', () => {
  it('contains today weather component', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    const todayWeather = wrapper.findAllComponents(TodayWeather).at(0)
    expect(todayWeather.exists()).toBeTruthy()
    const todaysWeather = wrapper.findAllComponents(TodayWeather)
    expect(todaysWeather).toHaveLength(1)

  })
})

describe('WeatherView.vue', () => {
  it('contains next five days weather component', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    const nextFiveDaysWeather = wrapper.findAllComponents(NextFiveDaysWeather).at(0)
    expect(nextFiveDaysWeather.exists()).toBeTruthy()
    const nextFiveDaysWeathers = wrapper.findAllComponents(NextFiveDaysWeather)
    expect(nextFiveDaysWeathers).toHaveLength(1)

  })
})

// confirms an input field exists
describe('WeatherView.vue', () => {
  it('contains input field and is enabled', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    const input = wrapper.findAll('v-text-field').at(0)
    expect(input.isDisabled('v-text-field')).toBe(false)

  })
})
// confirms a button exists
describe('WeatherView.vue', () => {
  it('contains button', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    const button = wrapper.findAll('v-btn').at(0)
    expect(button.isDisabled('v-btn')).toBe(false)

  })
})

describe('WeatherView.vue', () => {
  it('contains tabs', () => {
    const created = jest.fn()
    const wrapper = shallowMount(WeatherView, {
      computed: {
        buttonEnabled() {
          return true
        },
        currentCity() {
          return {
            name: 'oshodi,lagos state'
          }
        }
      },
      created() {
        created()
      },
    })
    const tabs = wrapper.findAll('v-tabs').at(0)
    expect(tabs.isDisabled('v-tabs')).toBe(false)

    const todayTab = wrapper.findAll('v-tab').at(0)
    expect(todayTab.isDisabled('v-tab')).toBe(false)

    const fiveDaysTab = wrapper.findAll('v-tab').at(1)
    expect(fiveDaysTab.isDisabled('v-tab')).toBe(false)

  })
})

describe('TodayWeather.vue', () => {
  it('contains tabs item', () => {
    const wrapper = shallowMount(TodayWeather, {
      computed: {
        todayWeather() {
          return {}
        },
      },
     
    })
    const tabs = wrapper.findAll('v-tabs-window-item').at(0)
    expect(tabs.isDisabled('v-tabs-window-item')).toBe(false)
  })
})

describe('TodayWeather.vue', () => {
  it('contains rows and column', () => {
    const wrapper = shallowMount(TodayWeather, {
        computed: {
          todayWeather() {
            return {}
          },
        },
       
      })
      const rows = wrapper.findAll('v-row').at(0)
      expect(rows.isDisabled('v-row')).toBe(false)

      const columns = wrapper.findAll('v-col').at(0)
      expect(columns.isDisabled('v-col')).toBe(false)

  })
})

describe('TodayWeather.vue', () => {
  it('contains card element', () => {
    const wrapper = shallowMount(TodayWeather, {
        computed: {
          todayWeather() {
            return {}
          },
        },
       
      })
      const cards = wrapper.findAll('v-card').at(0)
      expect(cards.isDisabled('v-card')).toBe(false)
  })
})

// // confirm classes
describe('TodayWeather.vue', () => {
  it('contains clasess', () => {
    const wrapper = shallowMount(TodayWeather, {
        computed: {
          todayWeather() {
            return {}
          },
        },
       
      })
    expect(wrapper.html()).toContain('my-2')

  })
})


describe('NextFiveDaysWeather.vue', () => {
  it('contains tabs item', () => {
    const wrapper = shallowMount(NextFiveDaysWeather, {
      computed: {
        nextSevenDaysWeather() {
          return [{}]
        },
      },
     
    })
    const tabs = wrapper.findAll('v-tabs-window-item').at(0)
    expect(tabs.isDisabled('v-tabs-window-item')).toBe(false)
  })
})

describe('NextFiveDaysWeather.vue', () => {
  it('contains rows and column', () => {
    const wrapper = shallowMount(NextFiveDaysWeather, {
      computed: {
        nextSevenDaysWeather() {
          return [{}]
        },
      },
       
      })
      const rows = wrapper.findAll('v-row').at(0)
      expect(rows.isDisabled('v-row')).toBe(false)

      const columns = wrapper.findAll('v-col').at(0)
      expect(columns.isDisabled('v-col')).toBe(false)

  })
})

describe('NextFiveDaysWeather.vue', () => {
  it('contains card element', () => {
    const wrapper = shallowMount(NextFiveDaysWeather, {
      computed: {
        nextSevenDaysWeather() {
          return [{}]
        },
      },
       
      })
      const cards = wrapper.findAll('v-card').at(0)
      expect(cards.isDisabled('v-card')).toBe(false)
  })
})

// // confirm classes
describe('NextFiveDaysWeather.vue', () => {
  it('contains clasess', () => {
    const wrapper = shallowMount(NextFiveDaysWeather, {
        computed: {
          nextSevenDaysWeather() {
            return [{}]
          },
        },
       
      })
    expect(wrapper.html()).toContain('my-2')

  })
})



