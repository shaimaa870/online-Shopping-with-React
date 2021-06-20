import axios from "axios";
const API_URL = "http://localhost:21231/";
class CategAUth {
  getDataCategoryFromApi() {
    let cat = [];

    axios(API_URL + "api/Categories")
      .then((res) => {
        cat = res.data;
        console.log("cat", cat);
      })
      .catch((err) => console.log(err));
    return cat;
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  register(UserName, Email, Password, FirstName, LastName, PhoneNumber) {
    return axios.post(API_URL + "Register", {
      UserName,
      Email,
      Password,
      FirstName,
      LastName,
      PhoneNumber,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new CategAUth();
