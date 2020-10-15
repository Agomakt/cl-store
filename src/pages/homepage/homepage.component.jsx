import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import {Link} from 'react-router-dom';


const HomePage = (props) => {
  console.log(props)
  return (
  <div className='homepage'>
    <Link to="/hats">Choose Hats</Link>
    <Directory>
      <MenuItem />
    </Directory>

    </div>
)}


export default HomePage;