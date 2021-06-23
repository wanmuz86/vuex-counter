<template>
  <div id="app">
    <p>{{counter}} . It is a {{parity}} number</p>
    <button v-on:click="increment">Increment</button>
    <button v-on:click="decrement">Decrement</button>
    <button v-on:click="incrementAsync">Increment Async</button>
    <button v-on:click="incrementIfOdd">Increment If Odd</button>
  </div>
</template>

<script>
// import store from '@/store/index'
import {mapActions, mapState,mapGetters} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapState([
      'counter'
    ]),
    ...mapGetters([
    'parity'
    ])
  },
  methods:{
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync',
      'incrementIfOdd'
    ])
    // increment:function(){
    //   store.dispatch('increment');
   
    // },
    // decrement:function(){
    //  store.dispatch('decrement');
    // },
    // incrementAsync:function(){
    //  store.dispatch('incrementAsync');
    // },
    // incrementIfOdd:function(){
    //   store.dispatch('incrementIfOdd');
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
