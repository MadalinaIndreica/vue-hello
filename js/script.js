const { createApp } = Vue;
const app = createApp ({
    data() {
        return {
            title: "Hi! that's my first time with vue :)",
            colorText: "lightblue",
            imgSrc: "https://www.chemare.it/wp-content/uploads/2018/03/CanneTramonto.jpg"
        }
    },
    methods: {
        changeColor: function() {
            this.colorText = this.colorText === "lightblue" ? "lightpink" : "lightblue";
    
            
        }}


})
app.mount("#app");