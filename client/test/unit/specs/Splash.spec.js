import Vue from 'vue'
import Hello from 'src/components/Splash'

describe('Splash.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><splash></splash></div>',
      components: { Splash }
    }).$mount()
    expect(vm.$el.querySelector('.splash h1').textContent).to.contain('Casual Card Table')
  })
})
