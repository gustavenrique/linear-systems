import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Introduction from '../Introduction.vue'

describe('Introduction', () => {
  it('renders properly', () => {
    const title = 'Álgebra Linear';

    const wrapper = mount(Introduction, { props: { msg: title } })
    expect(wrapper.text()).toContain(title)
  })
})
