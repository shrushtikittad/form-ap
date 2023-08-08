import { useState } from "react";
import "./Form.css"

function Form() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    // const { username, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(e.target.username.name);
        console.log(e.target.password.name);
    }

    return (
        <div className="form-border">
            <form onSubmit={submitHandler} className="form">
                <label className="label">LOGIN</label>
                <input type="text" name="username" onChange={changeHandler} placeholder="Username" className="login-detail"/>
                <input type="text" name="password" onChange={changeHandler} placeholder="Password" className="login-detail"/>
                <input type="submit" onSubmit={submitHandler} className="login-detail submit"/>
            </form>
            <div className="para">
                <p className="welcome">Hey!! WELCOME BACK</p>
                <img src="/src/paraimage.jpg" alt="" width="100px" height="100px" className="image"></img>
            </div>
        </div>
    )
}

export default Form;