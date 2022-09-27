import './home.scss';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return (
      <div className="wrapper__home">
      <div className="login">{props.login}</div>
      <Link to="/auth" className="leave">Leave</Link>
  </div>
)
}

export default Home;




















