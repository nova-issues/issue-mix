Nova.booting((Vue, router, store) => {
  Vue.component('index-tel-field', require('./components/IndexField').default)
  Vue.component('detail-tel-field', require('./components/DetailField').default)
  Vue.component('form-tel-field', require('./components/FormField').default)
})
