import React from 'react';
import { connect } from 'react-redux';
import authSelect from '../redux/Auth/authSelect';
import authOperations from '../redux/Auth/authOperations'
const style = {
    h2: {
        fontSize: 18,
        fontWeight: 600
    },
    but: {
        height: 25,
        marginLeft: 8
    }
}
const AuthAvatar = ({name, onLogOut}) => {
    return (
        <>
            <p style={style.h2}>Welcome, {name}</p><button type="button" onClick={onLogOut} style={style.but}>Logout</button>
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