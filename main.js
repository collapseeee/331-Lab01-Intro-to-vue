const { createApp, ref, computed } = Vue
const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true) // 9.9
        function updateCart(id) {
            cart.value.push(id)
        }
        const cartDisplay = computed(() => {
            const counts = cart.value.reduce((acc, id) => {
                acc[id] = (acc[id] || 0) + 1;
                return acc;
            }, {});

            return Object.entries(counts)
                .map(([id, quantity]) => `ID ${id}: ${quantity}`)
                .join(', ') || '-';
        })
        const isEmptyCart = computed(() => {
            return cart.value.length === 0;
        })
        function removeFromCart(id) {
            const index = cart.value.indexOf(id)
            if (index > -1) {
                cart.value.splice(index, 1)
            }
        }
        return {
            cart,
            premium,
            updateCart,
            cartDisplay,
            removeFromCart,
            isEmptyCart
        }
    }
})
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.mount('#app')