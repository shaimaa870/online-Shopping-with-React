import React, { Component } from 'react';
import SmallCard from '../smallCard';
import Card from '../Card'
import axios from 'axios'
import { Link } from 'react-router-dom';
class SubcatProd extends Component {
    state = {
        subprods:{},
        prods:[],
        first:[],
        second:[]

    }
    getDatasubategoryFromApi = (_id) => {
        //console.log(_id)
    
        axios("http://localhost:21231/api/SubCategories/categoryproduct/"+_id).then(res => {
          
    if(res.data.length>5){
          this.setState({
          prods:res.data,
          first:res.data.slice(0,6),

          second:res.data.slice(6,11)

          })}else{
          this.setState({
            prods:res.data,
        
            })}console.log("all mount",res.data,"first",this.state.first,"second",this.state.second,"all",this.state.prods);
          
        });
        
    
      }
      async componentDidMount(){
        await this.getDatasubategoryFromApi(1);
      }

    render() {
        if(this.state.prods===undefined||this.state.prods.length===0){
            return null;
        }
        else if(this.state.prods.length<=5){
            return(
                <div className="card  ml-3" style={{ backgroundColor: 'white', marginTop: 30 }}>
                     <div style={{ backgroundColor: 'plum', marginTop: 10 }}>
                                <h5 className=" mt-4 col-md-9 " style={{ float: 'left' }}>Man's Shavers</h5>
                               <a className=" col-md-1 mt-4" style={{ float: 'right' }}>see all&gt; </a>
                     </div>
                     <div className="row mt-4">
                         {this.state.prods.map((c,i)=><SmallCard key={i}  cardprod={c}/>)}

                     </div>

                </div>
            )

        }
        else{
            return(
                <div className="card  ml-3" style={{ backgroundColor: 'white', marginTop: 30 }}>
                             <div style={{ backgroundColor: 'plum', marginTop: 10 }}>
                                <h5 className=" mt-4 col-md-9 " style={{ float: 'left' }}>Man's Shavers</h5>
                               <a className=" col-md-1 mt-4" style={{ float: 'right' }}>see all&gt; </a>
                            </div>
                             <div className="container mt-5 ">
                            <div className="row blog ">
                                    <div className="col-md-12">
                                         <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
                                             <ol className="carousel-indicators ">
                                                 <li data-target="#blogCarousel" data-slide-to={0} className="active" />
                                                <li data-target="#blogCarousel" data-slide-to={1} />
                                             </ol>
                                             {/* Carousel items */}
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" id="1">
                                                    <div className="row">
                                                   {this.state.first.map((c,i)=><SmallCard key={i}  cardprod={c}/>)}
                                                    </div>
                                                </div>
            
                                             </div>
                                            {/*.item*/}
                                            <div className="carousel-item ">
                                                <div className="row">
                                                {this.state.second.map((c,i)=><SmallCard key={i}  cardprod={c}/>)}
                                                </div>
                                                {/*.row*/}
                                            </div>
                                            {/*.item*/}
                                        </div>
                                        {/*.carousel-inner*/}
                                    </div>
                                    {/*.Carousel*/}
                                </div>
                            </div>
                        </div>
            )
           }}}
  

export default SubcatProd;