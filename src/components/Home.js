import React from 'react';

const style = {
    home: {
        fontSize: 32,
        color: "#e410d4",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }
}
const Home = () => {
    return (
        <h1 style={style.home}>Hello. You are on the home page.</h1>
    )
}
export default Home