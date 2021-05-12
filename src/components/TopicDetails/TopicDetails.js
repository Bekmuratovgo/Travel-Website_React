import { Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { topicContext } from "../../contexts/TopicContext";
import "./TopicDetails.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { useHistory } from "react-router";


const TopicDetails = (props) => {
    const { getTopicDetails, topicDetails, saveTopic, deleteTask } = useContext(
        topicContext
    );
    let history = useHistory()
    // console.log("topicDetails", topicDetails);
    const [editStatus, setEditStatus] = useState(false);
    const [editedTopic, setEditedTopic] = useState();

    const handleValue = (e) => {
        let newtopic = {
            ...editedTopic,
            [e.target.name]: e.target.value,
        };
        setEditedTopic(newtopic);
    };

    const handleSave = () => {
        saveTopic(props.match.params.id, editedTopic);
        setEditStatus(false);
    };

    const handleDelete = (history) => {
        deleteTask(props.match.params.id, history);
    };

    useEffect(() => {
        setTimeout(() => {
            getTopicDetails(props.match.params.id);
        }, 300);

        getTopicDetails(props.match.params.id);
    }, [props.match.params.id]);

    // const style = {
    //     background: url(${topicDetails.secondImg}),
    // }

    return (
        <div>
            {topicDetails ? (
                <div>
                    <div className="wraper">
                        <div className="main-left">
                            <div className="main-box">
                                {editStatus ? (
                                    <div className="edit-textareas">
                                        <textarea
                                            name="title"
                                            onChange={handleValue}
                                        >
                                            {topicDetails.title}
                                        </textarea>
                                        <textarea
                                            name="description"
                                            className="box-desc"
                                            onChange={handleValue}
                                        >
                                            {topicDetails.description}
                                        </textarea>
                                        <textarea
                                            name="img"
                                            onChange={handleValue}
                                            alt="img"
                                        >
                                            {topicDetails.img}
                                        </textarea>
                                        <textarea
                                            name="price"
                                            onChange={handleValue}
                                        >
                                            {topicDetails.price}
                                        </textarea>
                                        <textarea
                                            name="access"
                                            onChange={handleValue}
                                        >
                                            {topicDetails.access}
                                        </textarea>
                                        {/* <textarea name="secondImg" onChange={handleValue}>{topicDetails.secondImg}</textarea> */}
                                        {/* <textarea name="subTitle" onChange={handleValue}>{topicDetails.subTitle}</textarea> */}
                                        {/* <textarea name="secondDescription" className="box-desc" onChange={handleValue}>{topicDetails.secondDescription}</textarea> */}
                                    </div>
                                ) : (
                                    <>
                                          <div className="site-container">
                                                {/* <div className="article-container"> */}
                                                    <article className="article-card">
                                                        <figure className="article-image">
                                                            <img src={topicDetails.img} alt="img"/>
                                                        </figure>
                                                        <div className="article-content">
                                                            <p className="card-category">Travel</p>
                                                            <h3 className="card-title">{topicDetails.title}</h3>
                                                            <p className="card-excerpt">{topicDetails.description}</p>
                                                            <p className="card-excerpt">{topicDetails.price}</p>
                                                            <p className="card-excerpt">{topicDetails.access}</p>
                                                        </div>
                                                    </article>
                                                    

                                                {/* </div> */}
                                            </div>





                                        {/* 
                                <h1>{topicDetails.title}</h1>
                                <p className="box-desc">{topicDetails.description}</p>
                                <img  src={topicDetails.img} alt="topic-img"/> */}
                                        {/* <h2>{topicDetails.subTitle}</h2> */}

                                        {/* <img src={topicDetails.secondImg} alt="topic-img"/> */}
                                    </>
                                )}

                                <div className="details_btns">
                                    {editStatus ? (
                                        <button
                                            className="trio"
                                            onClick={handleSave}
                                        >
                                            <SaveAltIcon style={{color: 'red'}}/>
                                            {/* <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX/////VXZES1S3OVhBSFJYXWU8S1ONTl//VXj/UnSNkJTwVHN7TVw8RE3/gpr/9vj/kqb0bYn34ufv1Nv4fZTAWHC0Kk7dr7jzUHGyN1brydFuRlW8OFhgZm03P0n19fbdU3BZTFjLzc9xd32AhIrr7O26vcDc3d6NXWyNjJJuTVvkVHJxTVv/ZIKDh42jpaqXmp9lTVmxUGelT2XLUmyETl7Lcoi+T2nTU22yIUjbqrRNTFdVTFeKa3eGfoV0en/yjUtEAAADfElEQVR4nO3d61LaQBiAYYIhBmzUarX0kAXBREVFUKnYE/d/V0WtJOSwOmTDbpj3/etMlsdvWZxhxq3ViIiIiIiIiIiIiIiIKlYQtvp+w4z8fisM1PI6oS+EZ5uTJ4QfdtT5er6w66ZlC7+nyBiMDPQ9ZYuRkr16NvN0U3LzZmcKgH0zB/iS3S9MDGYmA+fEWcGN2hmZu0Vf8kbFjpue0C14M9ErNEI/vkedrLyyy1w19qpsv8gQw9gInfpgsp3q/KJVbhfn6UUn43rMKMICwtgIncFt13KTNXcLPP197TZTq7and2MnNsTVHx5EI3QmXde1UjV399RZMtvbbaaXda37QUQUqx+n0SZ1Bt30OvqE8+5PVGzTVvRRcZsxQK1C624xRK+18tMXf87MR2ia0I2GaPdXfvrioHEm2b9HnTO8vHodYoGjprEQbmePUKdw58NC2Fj56QgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEaoIIUJ5CBGqCCFCeQgRqgghQnkIEapIv1AhJjvNQut6v+yuc1Zel9Bqll3ewmsTagshQoT6Q4gQof4QIkSoP4QIEeoPIUKE+kOIEKH+ECJcSVjitxRmCN2PxWunyltZg7D56WDllV47PPqSaGtn04RbyRAiRIgQIUKECLULDw6TyX8L1RP+OEr08HnDhEfHidd7vHHC5OtFiBAhQoQIESJEiBAhQoQIESJEiBAhQoQI9Qrr4+mmC99DzBI+PB4v9/jTVKFzknOLpVx4+DWZWd+uxW9Vd369RaziN6TxC4/fJlZRWDuN3zvu/JYTKykMhkvE8VRGrKSwFrSWbo8fyIjVFKaIko1aUWEtWHov1seX+f/HZb1CJfcBP9dZPm5OconrFaq50zmT+DuPuGZh7F7uUdFl3znF9QrV3K3+WuJDI+e4WaPQte4HTiTsFF43eaJedd2MrvdVCL8na6cWstrTu3EELPw2fC75obGd0fmfi1bR/l59SzZJrzQZ1yNgXfRUCJMbNTPbK55TT5a1Uvznnq9gkz61fNwYlKdmhOYSvRtFIzSVaA8DZcA5cWgc0Z6dKQSmTlT9eUO1QNOInnejcov+J5qzUW3h99QdMjHiqfBs/XlC9EvxPRXOGrrz+6OwLB4REREREREREREREVFp/QP7Rg3dlCrBMwAAAABJRU5ErkJggg=="
                                                alt="btn-icon"
                                            /> */}
                                            {/* Сохранить */}
                                        </button>
                                    ) : (
                                        <button
                                            className="trio"
                                            onClick={() => setEditStatus(true)}
                                        >
                                            <EditIcon style={{color: 'red'}}/>
                                            {/* <img
                                                src="data:image/png;base64,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"
                                                alt="btn-icon"
                                            /> */}
                                            {/* Редактировать */}
                                        </button>
                                    )}

                                    <button
                                        className="trio"
                                        onClick={() => handleDelete(history)}
                                    >
                                        <DeleteSweepIcon style={{color: 'red'}}/>
                                        {/* <img
                                            src="data:image/png;base64,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"
                                            alt="btn-icon"
                                        /> */}
                                        {/* Удалить */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default TopicDetails;
