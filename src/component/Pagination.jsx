import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const { productsPerPage, totalproducts, paginate, nextPage, prevPage } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination justify-content-center">
                    <li className="page-item pagination">
                        <button className="page-link p-3" onClick={() => prevPage()}>Previous</button>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item pagination" key={num}>
                            <button onClick={() => paginate(num)} className="page-link p-3">{num}</button>
                        </li>
                    ))}
                    <li className="page-item pagination">
                        <button  className="page-link p-3" onClick={() => nextPage()}>Next</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination