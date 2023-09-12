import { Link } from "react-router-dom"
import './css/Registration.css';
export function Registration() {
    return(
        <div>
           <div  className="container">
    <h2>Registration</h2>
            <Link to="/login">Click here LOGIN</Link>
            <br />
            <Link to='/registration'>Click here Registration</Link>
    <form>
      <div className="form-group">
        <label  for="first_Name">first_Name:</label>
        <input type="text" id="name" name="name" placeholder="first name" required/>
        </div>
        <div className="form-group">
        <label  for="last_Name">last_Name:</label>
        <input type="text" id="name" name="name" placeholder="last name" required/>
      </div>
      <div className="form-group">
        <label  for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email" required/>
      </div>
      <div className="form-group">
        <label  for="password">Password:</label>
        <input type="password" id="password" name="password"  placeholder="password"required/>
        </div>
        <div className="form-group">
        <label  for=" Conformpassword"> ConformPassword:</label> 
        <input type=" Conformpassword" id=" Conformpassword" name=" Conformpassword" placeholder="Conformpassword" required/>
        </div>
        <div className="form-group">
        <label  for=" Mobile_number"> Mobile_number:</label> 
        <input type=" Mobile_number" id=" Mobile_Number" name=" Mobile_Number" placeholder="Mobile_number" required/>
        </div>
        <div className="form-group">
         <label  for=" roll_number"> roll_number:</label> 
         value={this.state.roll_number} onChange={this.changeroll_numberHandler}
         <input type=" roll_number" id=" roll_Number" name=" Mobile_Number" required/>
         </div>
         <div className="form-group">
         <label  for=" post"> post:</label> 
         value={this.state.post} onChange={this.changepostHandler}
         <input type=" post" id=" post" name=" post" required/>
         </div>

        <li><Link href="#Department">Department
                <select name="department" id="">(Select one) 
                    <option value="">CSE</option> 
                    <option value=""> CSE-AI</option> 
                    <option value="">CSE-DS</option>
                    <option value="">CSE-CS</option> 
                    <option value="">ECE</option> 
                    <option value="">EEE</option>
                    <option value="">MECH</option>
                    <option value="">CIVIL</option>
                  </select> 
              </Link>
              </li>
            
        
        <li><Link href="#Clubs">Clubs
                <select name="clubs" id="">(Select one) 
                    <option value="">CampusRadio</option> 
                    <option value=""> Debate Club</option> 
                    <option value="">Euphoria Club</option>
                    <option value="">Literary Club</option> 
                    <option value="">InnerWheel Club</option> 
                    <option value="">Speaking Club</option>
                  </select> 
              </Link>
              </li>
            
        

        <div  className="form-group">
        <label for=" activities"> activities:</label> 
        <input type=" activities" id=" activities" name=" activities" placeholder="activities"required/>
      </div>
      <Link to='/'><button type="submit">Register</button></Link>
    </form>
  </div>
  </div>
  );
  }
