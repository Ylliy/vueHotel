export default {
    timeOfCID(state) {

        return new Date(state.checkInDate).getTime();
    },
    getCity(state) {
        return state.cityName;
    },
    getCheckIn(state) {
        return state.checkInDate
    },
    getCheckOut(state) {
        return state.checkOutDate
    }
}