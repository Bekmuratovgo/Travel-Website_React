import React, { useContext } from 'react';
import { useState } from 'react';
import { topicContext } from '../../contexts/TopicContext';
import CommentList from './CommentList';

const Comment = () => {
    const[comment, setComment] = useState({
        title: '',
        description:''
    })

    const { postNewComment } = useContext(topicContext)
    function handleComment(e){
        let newComment = {
            ...comment,
            [e.target.name]: e.target.value
        }
        setComment(newComment)
    }
    const handleClickComment = () => {
        setComment({
            title: '',
            description: ''
        })
        postNewComment(comment)
    }

    return (
        <div>   
            <input name="title" className="input-adding" value={comment.title} type="text" onChange={handleComment} placeholder="Комментарий"/>
            <input name="description" className="input-adding" value={comment.description} type="text" onChange={handleComment} placeholder="Комментарий"/>

            <button className="btn-add" onClick={handleClickComment}>
                Добавить
            </button>
            <CommentList/>
        </div>
    );
};

export default Comment;