
const vm = new Vue({
    el: '#app',

    data: {
        results: [],
        id: '',
        login: '',
        password: '',
        status: '',
        create_date: '',

    },

    mounted() {

        this.get_users()
        console.log(this.results)

    },

    methods: {
        addBase() {
            axios.post('http://192.168.1.133:8000/api/v1/users/', {
                login: this.login,
                password: this.password,
                client: 1,
                status: this.status,
                create_date: this.create_date,
            })
            this.get_users()
        },
        get_users() {
            axios.get('http://192.168.1.133:8000/api/v1/users/').then(response => {
                this.results = response.data
            }).catch(error => {
                console.log(error)
            })
        }


    }
})