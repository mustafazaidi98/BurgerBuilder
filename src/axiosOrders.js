import Axios from "axios";

const instance = Axios.create({baseURL:"https://foodbytes-719ab.firebaseio.com/"})
export default instance;