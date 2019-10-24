import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:'',
    like:[],
    txt:''
  },
  mutations: {
   doSex(state,sex){
     state.sex=sex;
   },
    doChoice(state,like){
     state.like.push(like);
   },
   doClick(state,txt){
     state.txt=txt;
   },
  },
  actions: {
  },
  modules: {
  }
})
