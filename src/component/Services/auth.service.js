import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://localhost:44340/api/AccountAPi/";

class AuthService {
  createcart=(_id)=>{
   
    axios.post("https://localhost:44340/api/CartsItemAPI/createcart",{
    "CustimerId":_id}).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  login(UserName, Password) {
    return axios.post(API_URL+"Login",{UserName,Password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data.Token);
          // toast.success(UserName+" Is Login Successfully");

        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    window.location.assign("http://localhost:3000/Login");
  }
  SellerRegister(UserName, FirstName, LastName,Email,Password,PhoneNumber) {
    return axios.post("https://localhost:44340/api/SellersAPI/" +"Register", {
      UserName,
      Email,
       Password,
       FirstName,
       LastName,
       PhoneNumber
    }).then(console.log("Ok"));
  }


  register(UserName, FirstName, LastName,Email,Password,PhoneNumber) {
    return axios.post(API_URL +"Register", {
      UserName,
      Email,
       Password,
       FirstName,
       LastName,
       PhoneNumber
    }).then(res=>this.createcart(res.data.id));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();

