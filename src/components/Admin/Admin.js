import React from 'react';
import AddTopic from '../AddTopic/AddTopic';
import TopicList from '../TopicList/TopicList';

const Admin = () => {
    return (
        <div>
            <AddTopic/>
            <TopicList/>
        </div>
    );
};

export default Admin;