import React, { Component, lazy, Suspense } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Route, Switch } from 'react-router-dom';
import AuthNav from './components/AuthNav';
import authOperations from './redux/Auth/authOperations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./components/Home'));
const Register = lazy(() => import('./components/Register'))
const Login = lazy(() => import('./components/Login'))
const UserMenu = lazy(()=> import('./components/UserMenu'))


class App extends Component {
  componentDidMount() {
  this.props.getUser()
  }
  render() {
    return (
      <>
      <AuthNav />
      <Suspense fallback={<BoxLoading/>}>
      <Switch>
          <Route path="/" exact component={Home} />
          <PublicRoute path="/register" restricted redirectTo="/contacts" component={Register} />
          <PublicRoute path="/login" restricted redirectTo="/contacts" component={Login} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={UserMenu}/>
      </Switch>
      </Suspense>
    </>
    )
  }
}
const mapDispatchToProps = {
  getUser: authOperations.getUser
}
export default connect(null,mapDispatchToProps)(App)