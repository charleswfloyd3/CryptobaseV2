import './userParameters.css';
import './successMessage.css';
import React,{useState} from 'react';
import {useForm} from 'react-hook-form'
import {useCoin} from '../store/coin'
import Navbar from '../navbar/navbar';
import './completedrequest.css'
function UserParameters() {

// coin object selected by user sent from searchbar component
let coin = JSON.parse(localStorage.getItem('coinselected'))
// console.log(coin)
// .replaceAll('"','' )
let coinName = coin.name
const [formStatus, setformStatus] = useState(true)
let coinImage = coin.image

// react-form-hook stuff
const {register, handleSubmit} = useForm();
const onSubmit = async (data) => {
  setformStatus(false)
  console.log(Object.assign(coin,data))  

           
   try{
    const add = await fetch("http://localhost:5000/userparameters", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body:JSON.stringify(Object.assign(coin,data))
       });
    }
    catch(err){
      console.error()
      }              

};
let color = "white"
  return (
    <div>
    <div className="registerpage-container">
    <Navbar colordata={color} navleft={"Learn More"}/>

    {formStatus ?<div className="registerpage-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="form-header">You're almost done!</p>

          <p className="high-price">I would like to be notified if&nbsp;<p style={{color:"rgb(40, 99, 138)", fontWeight: "700"}}>{coinName}</p>&nbsp;rises above  ...</p>
          <label for="txt" className='dollar-label'>&nbsp;&nbsp;&nbsp;$
          <input autoFocus type="number" {...register('highprice')} className="high-price-input" >
          </input>
          </label>
          <p className="low-price">I would like to be notified if&nbsp;<p style={{color:"rgb(40, 99, 138)", fontWeight: "700"}}>{coinName}</p>&nbsp;drops below ...</p>
          <label for="txt" className='dollar-label'>&nbsp;&nbsp;&nbsp;$
          <input type="number" {...register('lowprice')} className="low-price-input"  >
          </input>
          </label>

          <p className="phone-num-header">Enter your phone number for SMS updates...</p>
          <label for="txt" className='plus-label'>&nbsp;&nbsp;+1
          <input type="text"  {...register('phonenumber')} className="phone-num-input" >
          </input>
          </label>
          <p className="coin-monitored-header">Recieve updates on&nbsp;<p style={{fontWeight:"600"}}> 
{coinName}</p><img src={coinImage} className="coin-image-register"></img></p>
          <input type='submit' value="Submit" className="register-submit" ></input>
          
        </form>
    </div> : 
    
      <div className="success-form">
        <div className="success-form-inner">
          <p className="success-form-header-container">
            <p className="success-form-header">Success</p>
            <img src="images/greencheck.png" className="greencheck"/>
          </p>
          <p className="success-message-container">
            <p className="success-message">You are now monitoring </p>
          <p className="succes-coin-info">
            <img src={coinImage} className="coin-img-success"/> 
            <p className="success-coin">{coinName}</p>
          </p>
          </p>
          <p className="disclaimer">We will only notify you via SMS once youre selected high or low price limit has been reached...after which you will need to reregister to recieve additional updates...</p>
          <p className="howitworks">Learn more about how Cryptobase works...</p>
        </div>
      </div>}
    </div>
    {/* <p className="footer">© Cryptobase All rights reserved. 2021</p> */}

    </div>
  );
}
export default UserParameters;
