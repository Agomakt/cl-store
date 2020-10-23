import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop' >SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ? (
          <Link className='option' onClick={() => auth.signOut()}>SIGN OUT</Link>
          ) : (
            <Link className='option' to='/signin'>SIGN IN</Link>
          )

      }
      
      <CartIcon />
    </div>

    <CartDropdown />

  </div>
)

// function that allows access to state, being RootReducer
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);