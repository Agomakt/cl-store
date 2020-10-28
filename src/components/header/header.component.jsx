import React  from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop' >SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ? (
          <Link className='option'  to='/' onClick={() => auth.signOut()}>SIGN OUT</Link>
          ) : (
            <Link className='option' to='/signin'>SIGN IN</Link>
          )

      }
      
      <CartIcon />
    </div>

    { hidden ? null : <CartDropdown /> }

  </div>
)

// function that allows access to state, being RootReducer
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

// the same as above with using createStructuredSelector()
const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);