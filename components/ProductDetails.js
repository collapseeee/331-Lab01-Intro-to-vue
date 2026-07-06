const productDetails = {
    template:
    /* HTML */
    `
    <ul>
        <li v-for="detail in details">
            {{ detail }}
        </li>
    </ul>
    `,
    /* Script */
    props: {
        details: Array
    }
}