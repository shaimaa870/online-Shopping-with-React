import React, { useRef, useEffect ,useState } from "react";
import axios from "axios";


export default function Paypal(props) {
  const paypal = useRef();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let _id = user.id
  let cost = props.cost ;
  useEffect(() => {
    //if(props.street && props.country && props.city){
   
    window.paypal
      .Buttons({
        
        createOrder: (data, actions, err) => {
           console.log(cost)
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  value:parseInt(cost),
                },
              },
            ],
          });
          
        },
        onApprove: async (data, actions) => {
          console.log("Done");
          await axios.post("https://localhost:44340/api/OrderApi/approveOrder/"+_id)
          await axios.delete("https://localhost:44340/api/CartsItemAPi/DeleteCartProductsForCustomer/"+_id)
          window.location.replace("http://localhost:3000/home")
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
console.log(props.cost)
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}