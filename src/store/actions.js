export default {
    changeN(context, data) {
        setTimeout(() => {

            context.commit('changeCID', data);
        }, 1000)
    }
}