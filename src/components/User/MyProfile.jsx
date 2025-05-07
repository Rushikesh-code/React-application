import React from 'react';
import {Link, useNavigate} from "react-router";

const MyProfile=()=>{
    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:"",
        address: ""
    });

    const navigate = useNavigate()

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const register = async (e) => {
        e.preventDefault();
        await fetch("http://172.18.4.127:3017/users/signup", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname: user.firstName,
                lname: user.lastName,
                email: user.email,
                passwd: user.password,
                mobile: user.phone,
                addr: user.address,
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
                    //setShowCred(true);
                }
            })
            .catch((error) => console.error("Error:", error));
    }
    return(
        <div style={styles.container}>
            <h1>My Profile</h1>
            <form onSubmit={register}>
                <input style={styles.input} placeholder="fname" onChange={handleChange} name="firstName" type="fname"/><br/>
                <input style={styles.input} placeholder="lname" onChange={handleChange} name="lastName" type="lname"/><br/>
                <input style={styles.input} placeholder="Email" onChange={handleChange} type="email" name="email"/><br/>
                <input style={styles.input} placeholder="Mobile Number" onChange={handleChange} type="number" name="phone"/><br/>
                <input style={styles.input} placeholder="Address" onChange={handleChange} type="address" name="address"/><br/>
                <input style={styles.input} placeholder="pwd" onChange={handleChange} name="password" type="password"/><br/>
                <input style={styles.input} placeholder="cnfPwd" name="cnfPwd" type="password"/><br/><br/>
                <input className="mx-3 col btn btn-secondary" type="submit" value="Save" onSubmit={register}/>
            </form>
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
    login: {
        color: 'blue',
    },
}

export default MyProfile;
