import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ChatUs extends Component {
    state = {  }
    handleClose=()=>{
        this.props.history.replace('/ContactUs');
    }
    render() { 
        return (
            <React.Fragment>
                <div className="chat text-center p-2"><button className="close2" onClick={()=>this.handleClose()}>&times;</button>
                    <p className="paragraph p-4 rounded text-dark">
                        click the <span className="font-weight-bolder">LIVE CHAT</span> button on the top of the page as shown in the screeenshot below
                    </p>
                    <img alt='LiveChat' src="https://static.jumia.com.eg/cms/external/cms/sp-contact_en_EG/1d9f29dc554b8ff8741f21885c545cf0.jpg" width="70%"/>
                </div>
            </React.Fragment>
          );
    }
}
 
export default ChatUs;