import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255,255,255,0.5), 
      rgba(255,255,255,0.5)
      ), 
    url("https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?cs=srgb&dl=pexels-riccardo-307008.jpg&fm=jpg&_gl=1*zk33pm*_ga*OTc0MzM0NzMyLjE2NjU2NTQ5ODM.*_ga_8JE65Q40S6*MTY2NjQ1Mzg0OS4zLjEuMTY2NjQ1NTg5Ny4wLjAuMA..") no-repeat center center/cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
      width: 25%;
      padding: 20px;
      background-color: white;
      ${mobile({width: "75%"})};
`;

const Form = styled.form`
      display: flex;
      flex-direction: column;  
`;

const Title = styled.h1`
      font-size: 24px;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;
`;

const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 10px 0px;
      padding: 10px;
`;

const Button = styled.button`
      width: 40%;
      border: none;
      padding: 15px 20px;
      background-color: teal;
      color: white;
      cursor: pointer;
      margin: auto;
      margin-bottom: 10px;
      &:disabled{
        color: green;
        cursor: not-allowed;
      }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
      color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState({});
  const dispatch = useDispatch();
  const {isFetching,error} = useSelector((state)=>state.user)

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: "+ response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
  }


  function handleSignOut (event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "48073964286-v3hjs9els4g1hunb23nbbpkqj8bfj2qq.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

  
  const handleClick = (e) =>{
    e.preventDefault();
    login(dispatch, {username, password});
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
            <div id="signInDiv"></div>
            {Object.keys(user).length !=0 &&
            <button onClick={(e)=> handleSignOut(e)}>Sign Out</button>
            }
            {user && 
            <div>
              <img src={user.picture} />
              <h3>{user.name}</h3>
              </div>}
            {/* {user ? <Navigate to="/"/> : <Login/>} */}
            {/* {error && <Error>Something went wrong...</Error>} */}
            <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE AN NEW ACCOUNT</Link>
        </Form> 
      </Wrapper>
    </Container>
  )
}

export default Login
