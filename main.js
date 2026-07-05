const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref("Boots");
        const description = ref("This is the description.")
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref("www.camt.cmu.ac.th")
        return {
            product,
            description,
            image,
            link
        }
    }
}).mount('#app')