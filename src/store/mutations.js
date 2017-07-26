export default {
    changeCID(state, payload) {
        state.checkInDate = payload.date;
    },
    setSearchInfo(state, data) {
        state.checkInDate = data.checkIn ? data.checkIn : '';
        state.checkOutDate = data.checkOut ? data.checkOut : '';
        state.cityName = data.cityName ? data.cityName : '';
    },
    changeCity(state, payload) {
        state.cityName = payload.cityName;
    },
    changeDate(state, val) {
        state.checkInDate = val[0];
        state.checkOutDate = val[1];
    }
}