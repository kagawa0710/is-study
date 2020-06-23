new Vue({
    el: '#app',
    data: {
        active: false,
        navi: false,
    },
    methods: {
        naviOpen: function() {
            this.active = !this.active;
            this.navi = !this.navi;
        }
    }
})
