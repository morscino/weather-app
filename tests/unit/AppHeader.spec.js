import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/layouts/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('Weather App', () => {
    const siteName = 'Weather App'
    const wrapper = shallowMount(AppHeader, {
      data() {
        return {
          siteName,
        }
      },
    })
    expect(wrapper.text()).toMatch(siteName)
  })
})
