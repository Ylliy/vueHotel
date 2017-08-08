export default {
    changeN(context, data) {
        setTimeout(() => {

            context.commit('changeCID', data);
        }, 1000)
    },
    getCityList(context, data) {
        fetch('http://127.0.0.1:8081/city').then((r) => {
            return r.json();

        }).then((r) => {
            // console.log('*****', this.cityData)
            // console.log(r.data.data);
            context.commit('')
        })
    }
}