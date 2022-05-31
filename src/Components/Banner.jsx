import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
import cse from '../Components/public/image/yt1.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Zakaria BOUYAHI  </h1>
                    <p id="paragarph1"> Web Developpment Student at GoMyCode</p>
                    <a id="logo" href="https://http://www.ucar.rnu.tn/ecole-nationale-dingenieurs-de-bizerte/" ><img src={cse} width="50" height="50" alt="cselogo"/></a> 
                    
            </section>
        )
    }
}

export default Banner


