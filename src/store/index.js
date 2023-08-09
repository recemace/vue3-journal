import { createStore } from 'vuex'

import journalModule from '@/modules/daybook/store/journal';

const store = createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  modules:{
    journalModule
  }
})

export default store