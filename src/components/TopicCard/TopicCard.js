import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import './TopicCard.css'
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { topicContext } from '../../contexts/TopicContext';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const TopicCard = (props) => {
    const {addProductToCard, addProductToCardFavorite, checkProductInCartFavorite,checkProductInCart} = useContext(topicContext)
    console.log(addProductToCard +" wqwqwq");
    return (
        <div className="site-container">
            <div style={{position: 'relative'}}>
                <div style={{position: 'absolute', top: '3px'}}>
                <IconButton onClick={() => addProductToCard(props.item)} 
                    color={checkProductInCart(props.item.id) ? "secondary" : "primary"}>
                        {/* <i class="fas fa-shopping-cart"/> */}
                        <ShoppingCartIcon />
                </IconButton>
                </div>
            </div>
            <div style={{position: 'relative',float:'right',marginRight:'45px'}}>
                <div style={{position: 'absolute', top: '3px'}}>
                <IconButton onClick={() => addProductToCardFavorite(props.item)} 
                    color={checkProductInCartFavorite(props.item.id) ? "secondary" : "primary"}>
                        {/* <i class="fas fa-shopping-cart"/> */}
                        <BookmarkBorderIcon />
                </IconButton>
                </div>
            </div>
           
            <Link to={`/details/${props.item.id}`}>
                <div className="con-flex">
                    <article className="article-card">
                        <figure className="article-image">
                            <img src={props.item.img} alt=""/>
                        </figure>
                        <div className="article-content">
                            <p className="card-category">Travel</p>
                            <h3 className="card-title">{props.item.title}</h3>
                            <p className="card-excerpt">{props.item.description}</p>
                            <p className="card-excerpt">{props.item.price} сом</p>
                            <p className="card-excerpt">{props.item.access}</p>
                        </div>
                    </article>
                    
                </div>
            </Link>

            
        </div>
    );
};

export default TopicCard;