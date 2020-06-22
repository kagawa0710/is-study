new Vue({
    el: "#app",
    methods: {
        increase: function(step, event) {
            this.counter += step;
        }
    }
})