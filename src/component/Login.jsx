import { Link } from 'react-router-dom';
import './css/Login.css';
export function Login() {
    return(
        <div>
          <h1> LOGIN</h1>
            {/* <Link to="/">Click here LOGIN</Link> */}
            <br />
            <Link to='/registration'>Click here Registration</Link>
           < div className="container">
         <form>
      <div className="row">
        <div className="col-1">
          <label for="firstname">First Name</label>
        </div>
        <div className="col-2">
          <input type="text" id="firstname" name="firstname" placeholder="Your first name.."/>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label for="lastname">Last Name</label>
        </div>
        <div className="col-4">
          <input type="text" id="lastname" name="lastname" placeholder="Your last name.."/>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          
          <label for="email ">email</label>
          <input type="text" id="email" name="email" placeholder="email.."/>
        </div>
        
        <div className="row">
          <div className="col-6">
            
            <label for="Password ">password</label>
            <input type="text" id="password" name="password" placeholder="password.."/>
          </div>
          
      <div className="row">
        <div className="col-7">
          <label for="country">Country</label>
        </div>
        <div className="col-8">
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="Andhara pradesh">Andhara pradesh</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <label for="subject">Subject</label>
        </div>
        <div className="col-10">
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        </div>
      </div>
      <div className="row">
        <input type="submit" value="Submit"/>
       </div>
       </div>
  
        </div>
    </form>
        </div>
        </div>
    )
}