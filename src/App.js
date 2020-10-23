import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  

  unsubsriveFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubsriveFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user})
      // console.log(user);
      
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data()); // but doesn't represent the id as it is at snapShot
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          // , () => console.log(this.state)
          )
        });

        
        
        setCurrentUser(userAuth)
      }

      // console.log(this.state)

    })

  }

  componentWillUnmount() {
    this.unsubsriveFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );

  }

}


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect( null, mapDispatchToProps )(App);
