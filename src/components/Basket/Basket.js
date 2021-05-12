import { CircularProgress } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { topicContext } from '../../contexts/TopicContext';
import { calcTotalPrice } from '../TopicList/calcPrice';

import './Basket.css';



const Basket = (props) => {
    const {getCart, cart, changeProductCount, deleteFromCart, cardDelete} = useContext(topicContext)
    // function handleCardDelete(){
    //     // console.log(cart.products[0].item.id);
    //     cardDelete(cart.products[0].item.id)
    // }

    useEffect(() => {
        getCart()
    }, [])
    return (
        <div className="cart">
            {cart.products ? (
            <div className="asd">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>SubPrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.map(elem => (
                            <tr key={elem.item.id}>
                                <td>
                                    <img style={{width: "50px"}} src={elem.item.img} alt="product-img" />
                                </td>
                                <td>{elem.item.title}</td>
                                <td>{elem.item.price}</td>
                                <td> <input 
                                type="number" 
                                value={elem.count}
                                onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                                
                                /></td>
                                <td>{elem.subPrice}</td>
                                <td><button className="btn-btn" onClick={() => deleteFromCart(elem.item.id)}>delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>Total: {calcTotalPrice(cart.products)} </h4>
                <Link to="/form-order">
                    <button className="btn-btn">Buy:</button>
                </Link>
            </div> 
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Basket;