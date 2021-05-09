import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function arrayIndexRemove(arr, index) {  
  return arr.filter(function(ele,i){ 
      return i != index;
  });
}

export default new Vuex.Store({
  state: {
    masterData: null,
    apiCalls: 0,
    apiSuccess: 0,
    apiFailure: 0,
    snacks: [],
  },
  mutations: {
    incrementApiCall (state) {
      state.apiCalls++;
    },
    decrementApiCall (state) {
      state.apiCalls--;
      if(state.apiCalls < 0) {
        state.apiCalls = 0
      }
    },
    incrementApiSuccess (state) {
      state.apiSuccess++;
    },
    incrementApiFail (state) {
      state.apiFailure++;
    },
    setMasterData (state, data) {
      state.masterData = data
    },
    removeSnack (state, index) {
      state.snacks = arrayIndexRemove(state.snacks,index);
    },
    addSnack (state,data) {
      state.snacks.push(data);
    }
  },
  actions: {
    incrementApiCall ({commit}) {
      commit('incrementApiCall')
    },
    incrementApiSuccess ({commit}) {
      commit('incrementApiSuccess')
    },
    incrementApiFail ({commit}) {
      commit('incrementApiFail')
    },
    decrementApiCall ({commit}) {
      commit('decrementApiCall')
    },
    setMasterData ({commit}, data) {
      commit('setMasterData',data)
    },
    removeSnack({commit},index) {
      commit('removeSnack',index)
    },
    addSnack({commit}, data){
      commit('addSnack',data)
    }
  },
  getters: {
    apiCallsInProgress: state => {
      if(state.apiCalls<=0){
        return false
      }
      return true
    },
    getData: state => state.masterData,
    apiCalls: state => state.apiCalls,
    dataLoaded: state => state.masterData ? true : false,
    snackbars: state => state.snacks,
  },
  modules: {}
})
