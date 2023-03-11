import "./Register.css";

function Register() {
  return (
    <div id="main-container">
      <form>
        <label htmlFor="text">Username</label>
        <input
          type="text"
          name="uname"
          placeholder="Enter your username"
          required
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <br />
        <label htmlFor="text">Roll</label>
        <input type="text" name="roll" placeholder="Enter your roll" required />
        <br />
        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default Register;
