import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';


const HomePage = () => (
  <div className='homepage'>
    
  <Directory>
    <MenuItem />
  
  </Directory>

  
    <div className="directory-menu">

      <div className="menu-item"> 
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    
      <div className="menu-item"> 
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    
      <div className="menu-item"> 
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    
      <div className="menu-item"> 
        <div className="content">
          <h1 className="title">WOMENs</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    
      <div className="menu-item"> 
        <div className="content">
          <h1 className="title">MENs</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    
    
      </div>
  </div>
)


export default HomePage;