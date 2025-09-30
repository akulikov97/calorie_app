import { useState } from 'react';

function Login() {
    const [state, setState] = useState({ username: "", email: "" });

    const onFormSubmit = (event) => {
        event.preventDefault();
        setState({
            username: "gfg123",
            email: "abc@gfg.org",
        });
    };
    return (
        <div>
            <form onSubmit={onFormSubmit} className="Users">
                <label> Enter username: </label>
                <input
                    type="text"
                    value={state.username}
                    onChange={(e) =>
                        setState((prev) => ({
                            ...prev,
                            username: e.target.value,
                        }))
                    }
                />
                <br />
                <br />
                <label>Enter Email Id:</label>
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                        setState((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                ></input>
                <br />
                <br />
                <input type="submit" value={
                    "Submit"} />
            </form>
            <br />
            <div>
                Entered Value: {state.username}
            </div>
        </div>);
}
export default Login;