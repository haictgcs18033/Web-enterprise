import React from 'react'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background';
import Contribution from '../Components/Contribution';
import Footer from '../Components/Footer';


export default function HomePage() {
    return (
        <div>
            <Navbar />

            <Background />

            <div className="container">
                <h2 className="title mt-32">Impressive Contributions</h2>
                <div className="row">
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                    <Contribution />
                </div>

                <div className="text-center">
                    <button type="button" className="show-btn mt-32">show more</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}