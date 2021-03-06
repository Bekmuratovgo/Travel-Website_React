import { Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Home.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Home = () => {
    const [upDate, setUpdate] = useState(false)
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogOut(){ 
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Failed to log Out')
        }
    }

    function handleUpdate(){
        setUpdate(true)
    }
    function handleUpdateClose(){
        setUpdate(false)
    }
    return (    
        <div className="testClass">       
        <div>
        <h1  className="easy">EASY FLY</h1><br/>
        <h1 className="zagolovok">EXPLORING <br/>THE WORLD </h1>
        </div>
        {upDate ? (
            <div className="update">
            <Card>  
                <Card.Body>
                    <h2 className="text-center md-4">Profile</h2>
                    {error &&  <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" style={{color: 'red'}} onClick={handleLogOut}>Log Out</Button>
            </div>
            </div>
        ) : (
            <div className="update" style={{display:'none'}}>
            <Card>  
                <Card.Body>
                    <h2 className="text-center md-4">Profile</h2>
                    {error &&  <Alert variant="danger">{error}</Alert>}
                    <strong>Email: </strong>{currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </div>
            </div>
            
        )}
        {
            upDate ? 
            <Button className="btn-close-profile" style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={handleUpdateClose}>X</Button>
            :
            <Button className="btn-profile" style={{backgroundColor: 'transparent', borderColor: 'transparent'}} onClick={handleUpdate}><AccountBoxIcon/></Button>

        }
        {/* <Button className="btn-profile" style={{backgroundColor: 'transparent', borderColor: 'transparent'}} onClick={handleUpdate}><AccountBoxIcon/></Button> */}
            {/* <button className="watch">Watch</button> */}
        </div>
    );
};

export default Home;