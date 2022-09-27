import {Link} from 'react-router-dom';
import './auth.scss';

const Auth = () => {
  return (
    <div className="wrapper__auth">
      <form action="" method="post">
        <input type="text" className="login" placeholder="Login" name="login"/>
        <input type="text" className="password" placeholder="Password" name="password"/>
        <button type="submit">Sign up</button>
      </form>
      <Link to="/reg/">Sign in</Link>
    </div>
  )
};

export default Auth;