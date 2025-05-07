import React, {useState} from "react";
import {Link, useNavigate} from "react-router";

 const  Login =()=> {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showCred,setShowCred] = useState(false);

     const navigate = useNavigate();

     const handleLogin = async () => {

         await fetch("http://172.18.4.127:3017/users/signin", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 email: email,
                 passwd: password
             })
         }).then((res) => {
             console.log(res);
             return res.json();
         })
             .then((res) =>{
                 if(res.status==="success"){
                     navigate("/dashboard")
                 }
                 else{
                    setShowCred(true);
                 }
             })
             .catch((error) => console.error("Error:", error));
     }

    return(
        <div style={styles.container}>
            <h1>Login</h1>
            <div>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} style={styles.email} placeholder="Email" /><br/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} style={styles.password} placeholder="Passsword" />
            </div>
            <div>
                <p>Don't have account? <Link to="/register"><span style={styles.register}>register here</span></Link></p>
            </div>
            {
                showCred ?<p style={{color:"red"}}>Wrong credentails</p>:null
            }
            <div>
                <button style={styles.btn} onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}
const styles = {
     container: {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
     },
    register: {
         color: 'blue',
    },
    btn:{
         backgroundColor: 'blue',
         borderRadius: '5px',
    }
}
export default Login;
