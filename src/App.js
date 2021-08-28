import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import UserMenu from './components/UserMenu';
import AuthNav from './components/AuthNav';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import authOperations from './redux/Auth/authOperations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';



class App extends Component {
  componentDidMount() {
  this.props.getUser()
  }
  render() {
    return (
      <>
      <AuthNav />
      <Switch>
          <Route path="/" exact component={Home} />
          <PublicRoute path="/register" restricted redirectTo="/contacts" component={Register} />
          <PublicRoute path="/login" restricted redirectTo="/contacts" component={Login} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={UserMenu}/>
      </Switch>
    </>
    )
  }
}
const mapDispatchToProps = {
  getUser: authOperations.getUser
}
export default connect(null,mapDispatchToProps)(App)