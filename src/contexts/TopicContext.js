import axios from 'axios';
import React, { useReducer, useState } from 'react'
import { useHistory } from 'react-router';
import {calcsubPrice, calcTotalPrice, getCountProductsCart,getCountProductsCartFavorite} from "../components/TopicList/calcPrice";

export const topicContext = React.createContext();

const INIT_STATE = {
    topicsData: [],
    topicDetails: null,
    searchData: [],
    paginationPages: 1,

    cart: {},
    cartLength: getCountProductsCart(),

    cartFavorite: {},
    lengthFavorite: getCountProductsCartFavorite(),

    commentData: [],
}

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        // case 'GET_TOPICS':
        //     return{...state, topicsData: action.payload}
        case "GET_TOPICS":
            return {
                ...state,
                topicsData: action.payload.data,
                paginationPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 5
                ),
            };
        case 'GET_TOPIC_DETAILS':
            return{...state,topicDetails: action.payload}
        case 'SEARCH':
            return{...state, searchData: action.payload}

            case "CHANGE_CART_COUNT":
                return { ...state, cartLength: action.payload };
            case "CHANGE_CART_COUNT_FAVORITE":
                return { ...state, lengthFavorite: action.payload };
            case "GET_CART":
                return { ...state, cart: action.payload };
            case "GET_CART_FAVORITE":
                return { ...state, cartFavorite: action.payload };
            case "GET_COMMENT":
                return {...state, commentData: action.payload};

        default: return state
    }
}

const TopicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const history = useHistory()


    // CRUD CRUD CRUD CRUD CRUD 

    function postNewTopic(topic){ //отправление значеие инпутов на db
        axios.post('http://localhost:7000/topics', topic)
    }
    
    async function getTopics(history) {
        console.log(history + 'NurBek');
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 3);
        history.push(`${history.location.pathname}?${search.toString()}`);

        let data = await axios.get(
            `http://localhost:7000/topics/${window.location.search}`
        );
        dispatch({
            type: "GET_TOPICS",
            payload: data,
        });
    }

    async function getTopicDetails(id) {
        let { data } = await axios.get(`http://localhost:7000/topics/${id}`);
        dispatch({
            type: "GET_TOPIC_DETAILS",
            payload: data,
        });
    }

    async function saveTopic(id, newTopic) {
        await axios.patch(`http://localhost:7000/topics/${id}`, newTopic);
        getTopicDetails(id);
    }

    async function deleteTask(id, history) {
        await axios.delete(`http://localhost:7000/topics/${id}`)
        history.push('/')
        // getTopics();
    }
    // End Of CRUD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    // SEARCH SEARCH
    async function search(value){
        let { data } =  await axios.get(`http://localhost:7000/topics?q=${value}`)
        dispatch({
            type: 'SEARCH',
            payload: data
        })
     }   
    // End Of SEARCH !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    /// BASKET  BASKET
    function addProductToCard(product){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        

        
        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length >0){
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else{
            cart.products.push(newProduct)
        }

        newProduct.subPrice = calcsubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }


    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART",
            payload: cart,
        });
    }

    function changeProductCount(count, id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcsubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    function checkProductInCart(id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }let newCart =cart.products.filter(elem => elem.item.id ===id)
            return newCart.length > 0 ? true: false
    }
    // END OF Basket !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // DELETE of cart in BASKET
    function deleteFromCart(id) {


        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
        cart.products = cart.products.filter((item) => {
          return item.item.id !== id;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        getCart();
        dispatch({
          type: "CHANGE_CART_COUNT",
          payload: cart.products.length,
        });
      }
    // END OF DELETE of cart in BASKET!!!!!!!!!!!!!

    // FAVOURITE
    function addProductToCardFavorite(product){
        let cartFavorite = JSON.parse(localStorage.getItem('favourite'));
        if(!cartFavorite){
            cartFavorite = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        

        
        let filteredCart = cartFavorite.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length >0){
            cartFavorite.products = cartFavorite.products.filter(elem => elem.item.id !== product.id)
        }else{
            cartFavorite.products.push(newProduct)
        }

        newProduct.subPrice = calcsubPrice(newProduct)
        cartFavorite.totalPrice = calcTotalPrice(cartFavorite.products)
        localStorage.setItem("favourite", JSON.stringify(cartFavorite))
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cartFavorite.products.length
        })
    }


    function getCartFavorite() {
        let cartFavorite = JSON.parse(localStorage.getItem("favourite"));
        if (!cartFavorite) {
            cartFavorite = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_CART_FAVORITE",
            payload: cartFavorite,
        });
    }

    function changeProductCountFavorite(count, id){
        let cartFavorite = JSON.parse(localStorage.getItem('favourite'));
        cartFavorite.products = cartFavorite.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcsubPrice(elem)
            }
            return elem
        })
        cartFavorite.totalPrice = calcTotalPrice(cartFavorite.products)
        localStorage.setItem("favourite", JSON.stringify(cartFavorite))
        getCartFavorite()
    }

    function checkProductInCartFavorite(id){
        let cartFavorite = JSON.parse(localStorage.getItem('favourite'));
        if(!cartFavorite){
            cartFavorite = {
                products: [],
                totalPrice: 0
            }
        }let newcartFavorite =cartFavorite.products.filter(elem => elem.item.id ===id)
            return newcartFavorite.length > 0 ? true: false
    }
    // END OF FAVOURITE!!!!!!!!!!!!!!!!!!!!
    // DELETE OF FAVOURITE
    // END OF DELETE FAVOURITE!!!!!!!!!!!!!

    // COMMENT
    function postNewComment(comment){ //отправление значеие инпутов на db
        axios.post('http://localhost:7000/comments', comment)
        getComment()
    }
    
    async function getComment(){
        let { data } = await axios.get('http://localhost:7000/comments')
    
        dispatch({
            type: "GET_COMMENT",
            payload: data
        })
    }
    // END OF COMMENT!!!!!!!!!!!!!!!!!!!!!!!

    return (
        <topicContext.Provider value={{
            topicsData: state.topicsData,
            topicDetails: state.topicDetails,
            searchData: state.searchData,
            paginationPages: state.paginationPages,
            cart: state.cart,
            cartLength: state.cartLength,
            cartFavorite: state.cartFavorite,
            lengthFavorite: state.lengthFavorite,
            commentData: state.commentData,
            postNewTopic,
            getTopics,
            getTopicDetails,
            saveTopic,
            deleteTask,
            search,
            getCart,
            changeProductCount,
            checkProductInCart,
            addProductToCard,
            deleteFromCart,

            addProductToCardFavorite,
            changeProductCountFavorite,
            getCartFavorite,
            checkProductInCartFavorite,
            postNewComment,
            getComment,
         }}>
            {children}
        </topicContext.Provider>
    )
}
export default TopicContextProvider;