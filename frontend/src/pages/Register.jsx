import React,{useState,useContext} from 'react'
import '../styles/login.css';
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link,useNavigate} from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext.js';
import { BASE_URL } from '../utils/config.js';
const Register = () => {
  
  
  const[credentials, setCredientials]=useState({
    username:undefined,
    email:undefined,
    password:undefined
})
const {dispatch}=useContext(AuthContext);
const navigate=useNavigate();

  const handleChange= e=>{
    setCredientials(prev=>({...prev, [e.target.id]:e.target.value})) 
 }

 const handleClick= async e=>{
  e.preventDefault();
  try {
    const res=await fetch(`${BASE_URL}/auth/register`,{
      method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(credentials)
    })
    const result=await res.json()

    if(!res.ok) alert(result.message)
      dispatch({type:'REGISTER_SUCCESS'})
    navigate('/login');

  } catch (error) {
    alert(error.message);
  }
 }
  return (
<section>
  <Container>
    <Row>
      <Col lg='8' className='m-auto'>
        <div className="login_container d-flex justify-content-between">
          <div className="login_img">
            <img src={registerImg} alt="" />
          </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='xyz@gmail.com' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='******' required id='password' onChange={handleChange} />
                  </FormGroup>
             <Button className='btn secondary__btn auth_btn' type='submit'>
              Create Account
             </Button>
                </Form>
                <p>Already have an account? <Link to ='/login'>Login</Link></p>
              </div>

        </div>
            </Col>
    </Row>
  </Container>
</section>
  )
}

export default Register