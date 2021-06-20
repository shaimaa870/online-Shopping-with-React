// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// class Search extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <React.Fragment>
//                 <div className="container bg-light text-center">
//                     <h1>Search</h1>
               
//                     <React.Fragment>
//             {Object.keys(this.props.searchResult).map((key) => {
//               return (
//                 <div key={key} className="container text-center">
//                   <h1>Search Result</h1>
//                   <div className="row m-0 p-0 mt-4  mb-4">
//                       {this.props.searchResult[key].map((dataItem) => {
//                         return (
//                           <React.Fragment>
//                             <div  key={dataItem.productId} className="col-md-4 col-12">
//                               <div className="card item-box-blog">
//                                 <Link
//                                   to={{
//                                     pathname: `/Product/${dataItem.productId}`,
//                                     HandlerSaving: this.props.user,
//                                   }}
//                                   onClick={this.SaveinViews}
//                                   style={{ color: "black", textDecoration: "none" ,backgroundColor:"beige"}}
//                                 >
//                                     <img
//                                       className="card-img-top"
//                                       src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
//                                       alt={`${dataItem.productName}`}
//                                       height="250"
//                                     />
//                                     <div className="card-body" style={{height:"350px",direction:"ltr"}}>
//                                       <h6 className="card-title text-left" style={{overflow:"hidden",textOverflow:"ellipsis"}}>
//                                         {dataItem.productName}
//                                       </h6>
//                                       <div className="card-text text-left" style={{overflow:"hidden",textOverflow:"ellipsis",height:"150px"}}>
//                                         {dataItem.description}
//                                       </div>
//                                       <p className="card-text text-right">
//                                           {dataItem.price} Egp
//                                           {parseInt(dataItem.discount) > 0 && (
//                                             <div className="mt-2 p-0">
//                                               <span className="sp">
//                                                 (Egp
//                                                 <span>
//                                                   {parseInt(
//                                                     parseInt(dataItem.price) *
//                                                       (1 +
//                                                         parseInt(dataItem.discount) * 0.01)
//                                                   )}
//                                                 </span>
//                                                 )
//                                               </span>
//                                             </div>
//                                           )}
//                                           <p className="card-text text-right">
//                                               <span className="alert text-danger col-1 p-0">
//                                                 -{dataItem.discount}%
//                                               </span>
//                                           </p>
//                                       </p>
//                                     </div>
//                                 </Link>
//                                 <button className="mb-5 mt-2 ml-5" onClick={()=>this.addToCart(dataItem.productId)} style={{width:"50%",fontWeight:"600",fontSize:"16px",backgroundColor:"teal",color:"white"}}>Add to cart</button>
//                               </div>
//                             </div>
//                           </React.Fragment>
//                         )
//                       })}
//                   </div>
//                 </div>
//               )
//             })}
//         </React.Fragment>
               
//                 </div>
//             </React.Fragment>
//          );
//     }
// }
 
// export default Search;