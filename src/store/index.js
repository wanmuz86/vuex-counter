import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        counter:0
    },
    getters:{
        parity:(state) =>{
            return state.counter % 2 == 0 ?  "even" :  "odd";
        }

    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }

    },
    actions:{
        increment:({commit}) =>commit('increment'),
        decrement:({commit}) =>commit('decrement'),
        incrementAsync:({commit}) => {
            setTimeout(()=> commit('increment'), 1000)
        },
        incrementIfOdd:({commit,getters}) =>
        getters.parity == 'odd' ? commit('increment') : false
    }
});