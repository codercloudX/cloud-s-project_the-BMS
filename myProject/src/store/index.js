import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    showAlert:false
  },
  mutations:{
    change(state){
      state.showAlert=false;
    }
  }
})

export default store



