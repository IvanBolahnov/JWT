import React from 'react';
import {Link} from 'react-router-dom';
import './reg.scss';


class Reg extends React.Component {
  componentDidMount() {
    const url = "http://localhost:3000/reg";
    fetch(url)
      .then((res) => res)
      .then((data) => console.log(data));
    }
    render() {
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
    }
  }

export default Reg;

// const Reg = () => {
//   return (
//     <div className="wrapper__reg">
//       <form action="" method="post">
//             <input type="text" className="login" placeholder="Login" name="login"/>
//             <input type="text" className="password" placeholder="Password" name="password"/>
//             <input type="text" className="password--repeat" placeholder="Password repeat" name="passwordRepeat"/>
//             <button type="submit">Sign in</button>
//       </form>
//       <Link to="/auth/">Sign up</Link>
//     </div>
//   )
// };

// export default Reg;