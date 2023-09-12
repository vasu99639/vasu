import React, { Component } from 'react'
import StudentService from './services/StudentService'
import { Link } from 'react-router-dom'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
            <div className="container">
     <h2>Registration</h2>
             <Link to="/">Click here LOGIN</Link>
             <br />
             <Link to='/registration'>Click here Registration</Link>
     <form>
       <div className="form-group">
         <label htmlFor="first_Name">first_Name:</label>
         value={this.state.firstName} onChange={this.changeFirstNameHandler}
         <input type="text" id="name" name="name" required/>
         </div>
         <div className="form-group">
         <label htmlFor="last_Name">last_Name:</label>
         value={this.state.lastName} onChange={this.changelastNameHandler}
         <input type="text" id="name" name="name" required/>
       </div>
       <div className="form-group">
         <label htmlFor="email">Email:</label>
         value={this.state.emailId} onChange={this.changeEmailHandler}
         <input type="email" id="email" name="email" required/>
       </div>
       <div className="form-group">
         <label htmlFor="password">Password:</label>
         value={this.state.password} onChange={this.changePasswordHandler}
         <input type="password" id="password" name="password" required/>
         </div>
         <div className="form-group">
         <label htmlFor=" Conformpassword"> ConformPassword:</label> 
         value={this.state.conformpassword} onChange={this.changeConformpasswordHandler}
         <input type=" Conformpassword" id=" Conformpassword" name=" Conformpassword" required/>
         </div>
         <div className="form-group">
         <label htmlFor=" Mobile_number"> Mobile_number:</label> 
         value={this.state.mobile_number} onChange={this.changeMobile_numberHandler}
         <input type=" Mobile_number" id=" Mobile_Number" name=" Mobile_Number" required/>
         </div>
         <div className="form-group">
         <label htmlFor=" roll_number"> roll_number:</label> 
         value={this.state.roll_number} onChange={this.changeroll_numberHandler}
         <input type=" roll_number" id=" roll_Number" name=" Mobile_Number" required/>
         </div>
         <div className="form-group">
         <label htmlFor=" post"> post:</label> 
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
         <div className="form-group">
         <label htmlFor=" activities"> activities:</label> 
         value={this.state.activities} onChange={this.changeactivitiesHandler}
         <input type=" activities" id=" activities" name=" activities" required/>
       </div>
       <Link to='/club'><button type="submit" >Register successfull</button></Link>
     </form>
   </div>
   </div>
   )
   }
}
export default ViewStudentComponent