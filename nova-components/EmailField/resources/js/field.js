Nova.booting((Vue, router, store) => {
  Vue.component('index-email-field', require('./components/IndexField'))
  Vue.component('detail-email-field', require('./components/DetailField'))
  Vue.component('form-email-field', require('./components/FormField'))
})
