const api = {
    baseURL: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',

    call: function (path) {
        return new Promise((resolve, reject)=> {
            fetch(path)
                .then(res=> {
                    return res.json()
                })
                .then(data=> {
                    return resolve(data)
                })
                .catch((err)=> {
                    reject(err)
                })
        })
        .catch((err)=> {
            throw new Error (err)
        })
    },

    getUsers: function (query) {
        let path = `${this.baseURL}`

        return this.call(path).then(res => res)
    }
}
export default api