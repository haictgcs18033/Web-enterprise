import React from 'react'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background';
import Contribution from '../Components/Contribution';
import Footer from '../Components/Footer';


export default function HomePage() {
    return (
        <div>
            <Background></Background>
            <div className="container">
                <h2 className="title">Impressive Contributions</h2>
                <div className="row">
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                </div>

                <div className="text-center">
                    <button type="button" className="show-btn ">show more</button>
                </div>
            </div>

          
        </div>
    )
}