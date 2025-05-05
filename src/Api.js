import axios from "axios";

class Api {
    static getData = location => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
            params: {
                q: location,
                appid: `23f31bc49f04fc27f0b66b2100386458`,
            }
        })
    }
}

export default Api;