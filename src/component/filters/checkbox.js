import React,{Component} from 'react';
class Filters {

    state={
        fcolor:[],
        fbrand:[],
        fshipping:[],
        filteredArray

    }

    handlechecked = async (e,allprods) => {
          if (e.target) {
            if (e.target.name == "color") {
              //Copy List of checked colors
              let ncolors = this.state.fcolor;
              //Push New color
              if(e.target.checked){
                ncolors.push(e.target.value)
              }else{
                let I = ncolors.indexOf(e.target.value);
                ncolors.splice(I, 1);
              }
              await this.setState({ fcolor: ncolors })
             if(this.state.filteredArray.length==0){
              //get Filterd Products with fcolor array
              let filteredProducts = this.state.allprods.filter(item => this.state.fcolor.includes(item.color)) 
              await this.setState({filteredArray: filteredProducts})
            console.log(this.state.filteredArray)
            }
          else{
             let filteredProducts = this.state.filteredArray.filter(item => this.state.fcolor.includes(item.color)) 
              await this.setState({filteredArray: filteredProducts})
            console.log(this.state.filteredArray)
      
          }}
            //Color Filteration complete
            //TODO Rest Filters
            //==========================brands filter======================================================
            if (e.target.name == "brand") {
             //Copy List of checked brand
              let nbrands = this.state.fbrand;
              //Push New brand
              if(e.target.checked){
                nbrands.push(e.target.value)
              }else{
                let I = nbrands.indexOf(e.target.value);
                nbrands.splice(I, 1);
              }
              await this.setState({ fbrand: nbrands })
               if(this.state.filteredArray.length==0){
              let filteredProducts = this.state.allprods.filter(item =>this.state.fbrand.includes(`${item.brandId}`) )
              await this.setState({filteredArray: filteredProducts})
              console.log(this.state.filteredArray)
              }
              else{
                let filteredProducts = this.state.filteredArray.filter(item =>this.state.fbrand.includes(`${item.brandId}`) )
               await this.setState({filteredArray: filteredProducts})
              console.log(this.state.filteredArray)
              }
             }
            //Color Filteration complete
            //TODO Rest Filters
            //=========================shipping filters=====================================================
            if (e.target.name == "shipping") {
              //Copy List of checked brand
              let nshipping = this.state.fshipping;
              //Push New brand
              if(e.target.checked){
                nshipping.push(e.target.value)
              }else{
                let I = nshipping.indexOf(e.target.value);
                nshipping.splice(I, 1);
              }
              
              console.log(nshipping)
              await this.setState({ fnshipping: nshipping })
              console.log("state fcolor",this.state.fshipping)
      
      
              // Finsh updating fshipping Array
      
              //get Filterd Products with fshipping array
              if(this.state.filteredArray.length==0){
              let filteredProducts = this.state.allprods.filter(item =>this.state.fshipping.includes(`${item.ship}`) )
              //console.log(this.state.fbrand.includes(1) )
              await this.setState({filteredArray: filteredProducts})
              console.log(filteredProducts)
              }
              else{
                let filteredProducts = this.state.filteredArray.filter(item =>this.state.fshipping.includes(`${item.ship}`) )
              //console.log(this.state.fbrand.includes(1) )
              await this.setState({filteredArray: filteredProducts})
              console.log(filteredProducts)
              }
              
          
              
            }
          
          }}
      
      



}
export default new Filters();