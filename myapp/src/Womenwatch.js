import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { AiTwotoneStar } from 'react-icons/ai';
import {Link} from 'react-router-dom'
const axios = require('axios')

const Womenwatch = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/womenwatch')

            .then(function (response) {
                console.log(response.data);
                setItem(response.data)
            })

            .catch(function (error) {
                console.log(error);
            })

    }, [])

    return (
        <div>

            <Header />
            <div className='container product'>
                {
                    item.map((elem, i) => {
                        return (
                            <>
                                <div className="product_box my-5" key={i} >
                                    <img src={elem.product_image} />
                                    <p>{elem.product_name}</p>
                                    <p>₹{elem.product_price}</p>
                                    <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />
                                    <br></br>
                                    <Link to={`/buynow/${elem._id}`}>
                                        <button className='mt-3'>Buy Now</button>
                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <Footer />

        </div>
    )
}

export default Womenwatch