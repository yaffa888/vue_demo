export default {
    data() {
        return {
            disabled: false
        }
    },
    methods: {
        warnDisabled() {
            this.disabled = true
            setTimeout(() => {
                this.disabled = false
            }, 1500)
        }
    }
}