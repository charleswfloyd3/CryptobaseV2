import React from 'react'
import Navbar from '../navbar/navbar';
import './info.css'
import infographic from '../assets/images/info.jpeg'
const Info = () => {

    let color = "black"
    return (
        <div className="info-page-outer">
            <Navbar colordata={color} navleft={"Github Docs"}/>
            <img src={infographic} className="info-img" />
            {/* <div className="arrow-container">
                <img src="images/arrow.png" class="arrow bounce" />
            </div> */}
            <div className="info-content-div-outer">
                <p className="info-header">Welcome to Cryptobase</p>
                <div className="info-content-div">
                    <p className="cryptobase-description">
                         Hi there and welcome to cryptobase! Cryptobase is web application that allows users to monitor their favorite cryptocurrencies. Users will recieve updates via SMS when their selected cryptocurrencies fall or rise to their designated prices. For to long various crypto and stock monitoring platforms have required users to divulge excessive amounts of user data. This will no longer be the case. Cryptobase merely require users to enter the coin they would like to track, the low & high price they wished to be notified at, and their phone number for SMS notification. Cryptobase guarantees that users' phone numbers will not be sold to advertisers, nor will they be messaged by Cryptobase for any other matter than the coin that they are monitoring!
                    </p>
                    <p className="tutorial-header">How it Works</p>

                    <div className="img-contain">
                        <img src={"/images/step1.png"} className="step1"/>
                    </div>
                    <p className="tutorial-description">
                    1. Use cryptobase search to find the coin that you would like to monitor.
                    </p>
                    
                    <div className="img-contain">
                        <img src={"/images/step2.png"} className="step1"/>
                    </div>
                    <p className="tutorial-description">
                    2. Enter the low & high price you would like to be notified at and your phone number.
                    </p>
                    <div className="img-contain">
                        <img src={"/images/step3.png"} className="step1"/>
                    </div>
                    <p className="tutorial-description">
                    3. Cryptobase will now send you a notification to verify that you have inputed the correct number, and you are all set.
                    </p>
                    <p className="tutorial-description-end">
                   You will recieve a maximum of two notifications regarding you cryptocurrency, one when it dips to the selected low and two when it rises to the selected high. After which you must reregister for a new session. Have fun trading! 
                    </p>
                </div>
               
            </div>
          <p className="footer">© Cryptobase. All rights reserved. 2021</p>
        </div>
    )
}

export default Info;
