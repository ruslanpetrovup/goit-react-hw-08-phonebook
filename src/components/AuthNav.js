import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelect from '../redux/Auth/authSelect';
import AuthAvatar from './AuthAvatar'

const styles = {
    header: {
        display: "flex",
        width: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "space-between",
        borderBottom: "2px solid black"
    },
    link: {
        fontSize: 18,
        color: "#50c4de",
        fontWeight: 700,
        textDecoration: "none"
    },
    linkLeft: {
        marginLeft: 20,
        fontSize: 18,
        color: "#50c4de",
        fontWeight: 700,
        textDecoration: "none"
    },
    activeLink: {
        color: "red"
    },
    con: {
        display: "flex",
        alignItems: "center"
    }
}

const AuthNav = ({isActiveAuth}) => {
    return (
        <>
            <header style={styles.header}>
                
                <div style={styles.con}>
                    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
                        Home
                    </NavLink>
                    <NavLink to="/contacts" exact style={styles.linkLeft} activeStyle={styles.activeLink} hidden={!isActiveAuth}>
                        Contacts
                    </NavLink>
                </div>
                <div style={styles.con}>
                    {isActiveAuth ? <AuthAvatar/> : <><NavLink to="/login" exact style={styles.link} activeStyle={styles.activeLink}>
                        Login
                    </NavLink>
                    <NavLink to="/register" exact style={styles.linkLeft} activeStyle={styles.activeLink}>
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