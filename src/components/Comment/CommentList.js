import React, { useContext, useEffect } from 'react';
import { topicContext } from '../../contexts/TopicContext';
// import TopicCard from '../TopicCard/TopicCard';

const CommentList = () => {
    const { commentData, getComment } = useContext(topicContext)
    useEffect(() => {
        getComment()
    }, [])

    // console.log(commentData + "ASDgOLD")
    return (
        <div style={{background:'white'}}>
            {commentData.map((item) =>(
                <p key={item.id} item={item} > {item.title}
                </p>
            ))}
        </div>
    );
};

export default CommentList;