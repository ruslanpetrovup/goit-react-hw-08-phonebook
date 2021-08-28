import React from 'react';
import '../index.css'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelect from '../redux/Auth/authSelect';
import AuthAvatar from './AuthAvatar'

const styles = {
    con: {
        display: "flex",
        alignItems: "center"
    }
}

const AuthNav = ({isActiveAuth}) => {
    return (
        <>
            <header>
                
                <div style={styles.con}>
                    <NavLink to="/" exact className="buttonNav" activeClassName="activeButton">
                        Home
                    </NavLink>
                    <NavLink to="/contacts" exact className="buttonNav buttonCon" activeClassName="activeButton" hidden={!isActiveAuth}>
                        Contacts
                    </NavLink>
                </div>
                <div style={styles.con}>
                    {isActiveAuth ? <AuthAvatar/> : <><NavLink to="/login" exact className="buttonNav" activeClassName="activeButton">
                        Login
                    </NavLink>
                    <NavLink to="/register" exact className="buttonNavReg"  activeClassName="activeButton">
                        Register
                    </NavLink></>}
                </div>
            </header>
        </>
    )
}
const mapStateToProps = (state) => ({
  isActiveAuth: authSelect.getAuthSelect(state)
})
export default connect(mapStateToProps)(AuthNav)