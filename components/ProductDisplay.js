const productDisplay = {

    template:
    /* html */
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image">
            </div>
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p>
            <p v-else>Out of stock</p>
            <p>Shipping: {{ shipping }}</p>
            <!-- Product Details Component 9.10 -->
            <product-details :details="details"></product-details>
            <div v-for="(variant,index in variants" :key="variant.id" @mouseover="updateVariant(index)" 
            class="color-circle" :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" @click="addToCart" 
            :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
        </div>
    </div>
    `,


    /* Script */
    // Task 9:
    props: {
        premium: Boolean
    },
    setup(props){
        // Task 2:
        const product = ref("Boots");
        // const description = ref("This is the description.")
        // Task 3:
        // const image = ref('./assets/images/socks_green.jpg')
        // const link = ref("www.camt.cmu.ac.th")
        // Task 4:
        // const inStock = ref(true)
        const inventory = ref(11)
        //const onSale = ref(true)
        // Task 5:
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image:'./assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image:'./assets/images/socks_blue.jpg', quantity: 0}
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
        /* const onSaleText = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale!';
        }) */
        // Task 9:
        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            }
            return 30
        })

        return {
            // product,
            // description,

            image,
            // link,

            inStock,
            inventory,
            // onSale,

            details,
            variants,

            // cart,
            addToCart,
            // updateImage,
            // toggleInStock,

            // brand,
            title,
            updateVariant,
            // onSaleText,

            shipping
        }
    }
}