new Vue({
    el: '#app',
    data: {
        name: "Yuuya",
        age: 19,
        counter: 0
    },
    methods: {
        increase: function() {
            this.counter += 1;
        }
    }
})
