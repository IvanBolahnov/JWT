import {Link} from 'react-router-dom';
import './reg.scss';

const Reg = () => {
  return (
    <div className="wrapper__reg">
      <form action="" method="post">
            <input type="text" className="login" placeholder="Login" name="login"/>
            <input type="text" className="password" placeholder="Password" name="password"/>
            <input type="text" className="password--repeat" placeholder="Password repeat" name="passwordRepeat"/>
            <button type="submit">Sign in</button>
      </form>
      <Link to="/auth/">Sign up</Link>
    </div>
  )
};

export default Reg;