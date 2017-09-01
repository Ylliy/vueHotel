import axios from 'axios'
export default {
    changeN(context, data) {
        setTimeout(() => {

            context.commit('changeCID', data);
        }, 1000)
    },
    getCityList(context, data) {

        axios({
                method: 'get',
                url: 'http://127.0.0.1:8081/city',
                // responseType: 'stream'
            }).then((r) => {
                // console.log(r.data.data);
                // localStorage.setItem('citylist', JSON.stringify(r.data.data))
                context.commit('chageCityListData', r.data.data)

            })
            // fetch('http://127.0.0.1:8081/city').then((r) => {
            //     console.log(r);
            //     return r.json();

        // }).then((r) => {
        //     // console.log('*****', this.cityData)
        //     // console.log(r.data.data);
        //     console.log(r.data.data)
        //     context.commit('chageCityListData', r.data.data)
        // })
    }
}