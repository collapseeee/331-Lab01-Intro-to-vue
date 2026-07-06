const { createApp, ref, computed } = Vue
const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true) // 9.9
        return {
            cart,
            premium
        }
    }
})
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.mount('#app')