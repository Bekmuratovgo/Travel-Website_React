import React, { useContext, useEffect, useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';
import { topicContext } from '../../contexts/TopicContext';
import TopicCard from '../TopicCard/TopicCard';
import './TopicList.css'

const TopicList = () => {
    const { getTopics, topicsData,paginationPages } = useContext(topicContext)

    const history = useHistory()
    const [page, setPage] = useState(getPage());

    function getPage(){
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search) 
        search.set('_page', page)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setPage(page)
        getTopics(history)
    }

    useEffect(() => {
        getTopics(history);
    }, []);

    useEffect(() =>{
        getTopics(history)
    }, [])

    return (
        <div className="list">
            {topicsData.map((item) =>(
                <TopicCard key={item.id} item={item} />
            ))}
             <Pagination 
                page={+page}
                onChange={handlePage} 
                count={paginationPages} 
                color="primary" 
             />
        </div>
    );
};

export default TopicList;