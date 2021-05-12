import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { topicContext } from '../../contexts/TopicContext';
import './AddTopic.css'

const AddTopic = () => {
    const [topic, setTopic] = useState({
        img: '',
        title: '',
        description: '',
        price:'',
        access: ''
    })
    
    const { postNewTopic } = useContext(topicContext)
    const handleValues = (e) => {
        let newTopic = {
            ...topic,
            [e.target.name]: e.target.value
        }
        setTopic(newTopic)
    }
    const handleClick = () => {
        setTopic({
            img:'',
            title:'',
            description: '',
            price:'',
            access: ''
        })
        postNewTopic(topic)
    }
    return (
        <Container>

        <div className="inps">
            <input
                className="inp-add"
                value={topic.img}
                name="img"
                onChange={handleValues}
                type="text"
                placeholder="Изображение"
            />
            <input className="inp-add" value={topic.title} name="title" onChange={handleValues} type="text" placeholder="Заголовок"/>
            <input
                className="inp-add"
                value={topic.description}
                name="description"
                onChange={handleValues}
                type="text"
                placeholder="Описание"
                />
                <input
                    className="inp-add"
                    value={topic.price}
                    name="price"
                    onChange={handleValues}
                    type="text"
                    placeholder="Цена"
                />
                <input
                    className="inp-add"
                    value={topic.access}
                    name="access"
                    onChange={handleValues}
                    type="text"
                    placeholder="Доступность"
                />
            <button className="btn-add" onClick={handleClick}>
                Добавить
            </button>
        </div>
        </Container>
    );
};

export default AddTopic;