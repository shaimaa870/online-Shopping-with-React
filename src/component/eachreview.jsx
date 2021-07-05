import axios from "axios";
import React, { Component } from "react";
import { Button,Modal } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "./Services/auth.service";

class Eachreview extends Component {
    state={
        name:"",
        show:false,
        ratevalue:this.props.review.comment,
        ratetext:this.props.review.rating
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    handleClose=()=>{
        
        this.setState({show:false})

    }
    handlerchange=async(e)=>{
        if(e.target.name=="ratevalue"){
          await  this.setState({ratevalue:e.target.value})
        
          console.log(e.target.value)
        }
        if(e.target.name=="ratetext"){
        await  this.setState({ratetext:e.target.value})
        console.log(e.target.value)
        }
      
      
      }
      handlerclick=async(_pid,_id)=>{
          console.log(_pid,_id,this.state.ratetext,this.state.ratevalue)
      await axios.put("https://localhost:44340/api/ProductsAPi/EditReview",{
        "CustomerId":_id,
        "ProductId":_pid,
        "Comment":this.state.ratetext,
        "Rating":this.state.ratevalue
      }).then(res=>
          {
              toast.done("done")
              window.location.reload()
              
        }
      )
     }
       
 async getcustomername (_id){
       
    const {data}= await axios.get("https://localhost:44340/api/CustomersApi/"+_id);
      this.setState({name:data.firstName+ ' '+data.lastName})
  
    }
  async  componentDidMount(){
await this.getcustomername(this.props.review.customerId);
    }

    render() {

   const{review}=this.props;
  if(AuthService.getCurrentUser()&&review.customerId==AuthService.getCurrentUser().id)
  return (
    <React.Fragment>
       <p > <span className="float-left">{this.props.ratefn2(review.rating)}</span > <p className="float-right"><Button variant="primary" onClick={this.handleShow}><i class="fas fa-edit"></i></Button></p> </p>
       <p>{review.comment}</p>
       <p>{review.creationTime.substring(0,10)}  by me</p>
       
    
       <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>


           
            <select className="col-12" name="ratevalue"onChange={(e)=>this.handlerchange(e)}   >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
              
                  <input className="col-12" type="text" name="ratetext" placeholder="set your review"  onChange={(e)=>this.handlerchange(e)} />
                 
               

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>this.handlerclick(review.productId,review.customerId)}>
            confirm
          </Button>
        </Modal.Footer>
      </Modal>
    
    
    
    
    </React.Fragment>)

 else return (
            <React.Fragment>
               <p> {this.props.ratefn2(review.rating)}</p>
               <p>{review.comment}</p>
               <p>{review.creationTime.substring(0,10)}  by {this.state.name}</p>

            </React.Fragment>)
    }
}
export default Eachreview;