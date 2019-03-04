const app = new Vue({
    el: '#app',
    data: {
        title: 'Starter App',
        description: 'Simple Bindings for Vue.js, Bulma, Sass, and Firebase (Firestore)'
    },
    methods: {
        greet: () => {
            console.log('hello Vue.js');
        }
    },
    beforeMount(){
        this.greet()
    }
})