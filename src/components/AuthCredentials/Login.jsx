import React from "react";

 const  Login =()=> {
     console.log("Login")
    return(
        <div style={styles.container}>
            <h1>Login</h1>
            <div>
                Login : <input type="email" style={styles.email} placeholder="Email" /><br/>
                Password : <input type="password" style={styles.password} placeholder="Passsword" />
            </div>
            <div>
                <p>Don't have account? <span style={styles.register}>register here</span></p>
            </div>
            <div>
                <button style={styles.btn}>Login</button>
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
