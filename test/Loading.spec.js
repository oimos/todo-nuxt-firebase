import { mount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading', () => {
  test('check is loaded', () => {
    const wrapper = mount(Loading)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})