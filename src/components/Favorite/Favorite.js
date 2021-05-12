import { CircularProgress } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import { topicContext } from '../../contexts/TopicContext';
import './Favorite.css'

const Favorite = () => {
    const {getCartFavorite, cartFavorite,} = useContext(topicContext)
    console.log(cartFavorite + "Gold");

    useEffect(() => {
        getCartFavorite()
    }, [])
    return (
        <div className="list">

        {/* <div className="site-container"> */}
            {/* <div className="cartFavorite"> */}
                {cartFavorite.products ? (
                // <div className="asd">   
                  <div className="con-flex-Favorite">   
                  <div className="article-card-favorite">
                    {cartFavorite.products.map(elem => (
                        <article className="article-image" key={elem.item.id}>
                            <figure className="article-image">
                                <img src={elem.item.img} alt="product-img" />
                            </figure>
                            <div className="article-content">
                                <p className="card-category">Travel</p>
                                <h3 className="card-title">{elem.item.title}</h3>
                                <p className="card-excerpt">{elem.item.price}</p>
                                <p className="card-excerpt"> 
                                </p>
                                <p className="card-excerpt">{elem.subPrice}</p>
                            </div>
                            {/* <td><button className="btn-btn" onClick={() => deleteFromCart(elem.item.id)}>delete</button></td> */}
                        </article>
                    ))}
                  </div>
                  </div>

                // </div> 
                ) : (
                    <CircularProgress />
                )}
            {/* </div> */}
        {/* </div> */}
        </div>
    );
};

export default Favorite;