import profile from './images/profile_pic.png'
import { useState,useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://fitted-portal-api.herokuapp.com/api/v1/bank/banks"
function Two(){

    const [state, setState] = useState({
        name: "",
        job: ""
      });
    // useEffect(()=>{

    //     axios.get(`${baseURL}/1`)
    //     .then((response =>{
    //         setState(response.data);
    // }, [])
    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
          setState(response.data);
        });
      }, []);
    
    
      const handleChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
          name: state.name,
          code: state.code
        };
        axios.post(baseURL, userData).then((response) => {
          console.log(response.status, response.data.token);
        });
      };

    return(
        <div className='main'>
            
            <div className='set-apart card'>
                
                <div className='one'>
                    <h4> vetted tailor application</h4>     
                    <img src={profile} alt='pho'></img>
                        <div className="set">
                            <div>gender:</div>
                            <div>male</div>
                        </div>
                        <div className="set">
                            <div>location:</div>
                            <div>lagos,nigeria</div>
                        </div>
                        <div className="set">
                            <div> sew gender:</div>
                            <div>both</div>                    
                        </div>
                        <div className="set">
                            <div>phone number:</div>
                            <div>08137901372</div>
                        </div>
                        <div className="set">
                            <div>email address:</div>
                            <div>biola@fitted.ng</div>
                        </div>
                        <div className="set">
                            <div> store name:</div>
                            <div className='shift'>Skibi fashion house</div>                    
                        </div>
                        <div className="set">
                            <div> location:</div>
                            <div className='shift'>lagos,Nigeria</div>                    
                        </div>
                </div>
                <div className='two'>
                    
                    <form onSubmit={handleSubmit}>
                       
                    
                        <label>bank name</label>
                        <input className='input' placeholder='enter name of bank' name='name' onChange={handleChange} value={state.name}></input>

                        <label>account number</label>
                        <input className='input' placeholder='please input your account number' name='code' value={state.code} onChange={handleChange}  type='number'></input>
                        
                        <label>account name</label>
                        <input className='input'></input>
                        <button type='submit'>submit application</button>
                    </form>
                </div>
            </div>
        </div>
    )}
export default Two