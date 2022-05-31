import React, { Component } from 'react'
import biologo from './public/image/biopicimg.jpg'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={biologo} width="180" height="180" alt="abtimg"/>
                    <p>
                    I am an industrial engineer looking for a career change in the field of IT, that's why I chose GoMyCode as my school of education in order to achieve my goal. The combination of my engineering knowledge and my development skills can lead me to become a very well trained programmer.
                    GoMyCode offered free in-person intro classes to help graduate students from different backgroud prepare for their job seeking journy. I also heard positive things about GoMyCode and have since met a number of talented persons who attended this program.
Ultimately, GoMyCode won me over because it offered a rigorous five-month Stand Out Study Program  course. The program was designed to transform participants from beginners to talented Immersive developper.



                    </p>
                
            </section>
        )
    }
}

export default About
