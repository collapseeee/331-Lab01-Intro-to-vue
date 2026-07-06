const { createApp, ref, computed } = Vue

createApp({
    setup(){
        // Task 2:
        const product = ref("Boots");
        const description = ref("This is the description.")
        // Task 3:
        // const image = ref('./assets/images/socks_green.jpg')
        const link = ref("www.camt.cmu.ac.th")
        // Task 4:
        // const inStock = ref(true)
        const inventory = ref(11)
        const onSale = ref(true)
        // Task 5:
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', size:'M', image:'./assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', size:'L', image:'./assets/images/socks_blue.jpg', quantity: 0}
        ])
        // Task 6:
        const cart = ref(0)
        function addToCart() {
            cart.value +=1;
        }
        /*
        function updateImage(variantImage) {
            image.value = variantImage
        }
            */
        function toggleInStock() {
            inStock.value = !inStock.value
        }
        // Task 8:
        const brand = ref('SE 331')
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const selectedVariant = ref(0)
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        })
        const onSaleText = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale!';
        })

        return {
            // product,
            description,

            image,
            link,

            inStock,
            inventory,
            onSale,

            details,
            variants,

            cart,
            addToCart,
            // updateImage,
            toggleInStock,

            // brand,
            title,
            updateVariant,
            onSaleText
        }
    }
}).mount('#app')