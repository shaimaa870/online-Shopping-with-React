import React, { Component } from "react";
import DisplayedProducts from './displyedproducts';

class SearchResult extends Component {
    
    render(){
        return(
            <React.Fragment>
            {(this.props.location.state.length==0)
              ?(
              <React.Fragment>
                <div className="alert alert-danger container text-center"
                style={{
                  height: "300px",
                  
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "inherit",
                  backgroundOrigin: "border-box",
                  backgroundClip: "border-box",
                  backgroundColor: "initial",
                  backgroundSize: "contain",
                  border:"none"
                }}
                >
                <h2>Search Not Found</h2>
              </div>
               
              </React.Fragment>
              )
              :(
                <div className="container text-center offset-md-2 p-4"
              
                >
                  <DisplayedProducts  prods={this.props.location.state} name={this.props.location.name} />
                </div>
              )
            }
          </React.Fragment>
        )
    }

}
export default SearchResult;