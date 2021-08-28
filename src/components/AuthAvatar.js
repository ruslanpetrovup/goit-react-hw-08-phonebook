import React from 'react';
import '../index.css'
import { connect } from 'react-redux';
import authSelect from '../redux/Auth/authSelect';
import authOperations from '../redux/Auth/authOperations'

const AuthAvatar = ({name, onLogOut}) => {
    return (
        <>
            <p className="titleAvatar">Welcome, {name}</p><button className="buttonLogout" type="button" onClick={onLogOut} >Logout</button>
        </>
    )
}


const mapStateToProps = (state) => ({
    name: authSelect.getUserName(state)
})
const mapDispatchToProps = {
    onLogOut: authOperations.LogOut
}
export default connect(mapStateToProps,mapDispatchToProps )(AuthAvatar)