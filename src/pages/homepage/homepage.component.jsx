import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import {Link} from 'react-router-dom';


const HomePage = () => {
  // console.log(props)
  // <button onClick={() => props.history.push('/hats')}>HatsPage</button>
  // <Link to="/hats">Choose Hats</Link>
  return (
  <div className='homepage'>
    <Directory>
      <MenuItem />
    </Directory>

    </div>
)}


export default HomePage;