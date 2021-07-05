import React, { Component } from 'react';
import axios from 'axios';
import AuthService from '../Services/auth.service';

//import { HubConnection } from '@aspnet/signalr';
//import {HubConnection,HubConnectionBuilder} from "@microsoft/signalr";

class Chatbody extends Component {
  state={
   //hubConnection:null ,
    seller:{},
    messages:[],
    test:""

  }
  //const [connection, setConnection] = useState<null | HubConnection>(null);
  getsellerdetails=async(_sid)=>{
    axios.get("https://localhost:44340/api/SellersAPI/"+_sid).then(
      res=>{
        console.log(res.data)
        this.setState({seller:res.data})
 
      }
    ).catch(err=>
     console.log(err))
 
  }
  getchatmessage=async(_sid)=>{
    axios.get("https://localhost:44340/api/ChatHubs/"+AuthService.getCurrentUser().id+"/"+_sid).then(
      res=>{
        console.log(res.data)
        this.setState({messages:res.data})
       // window.location.reload();
 
      }
    ).catch(err=>
     console.log(err))

  }
  sendmessage=async()=>{
    if(AuthService.getCurrentUser().id){
   await axios.post("https://localhost:44340/api/ChatHubs/",{
        "UserName":AuthService.getCurrentUser().userName,
       "Text":this.state.text,
      "UserID":AuthService.getCurrentUser().id,
      "sellerId":this.props.match.params.id,
     
    }).then(
      window.location.reload()
      //this.setState({messages:res.data})
      )

  }}
  deletemessage=async(_mid)=>{
    if(AuthService.getCurrentUser().id){
   await axios.delete("https://localhost:44340/api/ChatHubs/removemessage/"+_mid).then(
      window.location.reload()
      
      )

  }}
// async componentDidMount(){
//  await this.getsellerdetails(this.props.match.params.id);
// //await this.getchatmessage(this.props.match.params.id);

// const hubConnection = new HubConnection('https://localhost:44340/ChatHubs');
 
// this.setState({ hubConnection, nick }, () => {
//   this.state.hubConnection
//     .start()
//     .then(() => console.log('Connection started!'))
//     .catch(err => console.log('Error while establishing connection :('));

// })

// }
 componentDidMount = async () => {
 await this.getsellerdetails(this.props.match.params.id);
 await this.getchatmessage(this.props.match.params.id);



//  const hubConnection =new  HubConnectionBuilder()
//     .withUrl('https://localhost:44340/ChatHubs')
//     .configureLogging(LogLevel.Information)
//     .build();

//   this.setState({ hubConnection }, () => {
//     this.state.hubConnection
//       .start()
//       .then(() => console.log('Connection started!')).catch(err=>console.log(err))
      
//   })
    // this.state.hubConnection.on('sendToAll', (nick, receivedMessage) => {
    //   const text = `${nick}: ${receivedMessage}`;
    //   const messages = this.state.messages.concat([text]);
    //   this.setState({ messages });
    // });
 // });
}
  render() {
    console.log(this.state.hubConnection)
 const {seller}=this.state;
    return (
      <React.Fragment>
    <div className="col-md-6 col-xl-8 chat offset-2 " style={{borderRadius:'20px'}} >
      <div className="card m-5" style={{height:"400",borderRadius:"30px",backgroundColor:"rgba(0,0,0,0.4)"}}>
        <div className="card-header msg_head">
          <div className="d-flex bd-highlight">
           
            <div className="user_info">
              <span>Chat with {seller.firstName +"  "+ seller.lastName} </span>
              <p>{this.state.messages.length} Messages</p>
            </div>
            
          </div>
          <span id="action_menu_btn">
            <i className="fas fa-ellipsis-v" />
          </span>
          
        </div>
        <div className="card-body msg_card_body">

        {this.state.messages.map((m,i)=>
        <>
          {
            m.userName==AuthService.getCurrentUser().userName ? 
            
            <div className="d-flex justify-content-end mb-4 ">
            <a type="button"
             onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.deletemessage(m.id) } } 
              
            >
          <div className="msg_cotainer_send">
            {m.text} 
            </div>
             <div>
           <span className="msg_time_send ">{m.when}</span>
              
            </div>
            </a>
            </div>:
             <div className="justify-content-start mb-4 ">
          
             <div className="msg_cotainer col-2">
                {seller.firstName}: {m.text}
                </div>
               
                <div className="col-3 ">
               <span className="msg_time_send">{m.when}</span>
             </div>
           </div>
         
          }
           </>
          )
         
          }
         
         
         </div>
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-append">
            
            </div>
            <textarea
              name
              className="form-control type_msg"
              placeholder="Type your message..."
              defaultValue={""}
              onChange={(e)=>this.setState({text:e.currentTarget.value})}
            />
            <div className="input-group-append">
            <button onClick={this.sendmessage}> 
              <span className="input-group-text send_btn">
              <i className="fas fa-location-arrow" />
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


      </React.Fragment>)}}
      export default Chatbody;