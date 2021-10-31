import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="text-center">
      <img style={{width:'100%'}} src={notFound} alt="" />
      <br />
      <Link to='/home'>
      <Button variant="primary" className="fw-bold">Go Home</Button>
      </Link>
      
    </div>
    );
};

export default NotFound;