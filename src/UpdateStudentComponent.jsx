import React, { Component } from 'react'
import StudentService from './services/StudentService';
import { Link } from 'react-router-dom';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id: this.props.match.params.id,
            id: '',
            firstName: '',
            lastName: '',
            roll_number:'',
            emailId: '',
            password:'',
            conformpassword:'',
            mobile_number:'',
            department:'',
            clubs:'',
            activities:''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.EmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConformpasswordHandler = this.changeConformpasswordHandler.bind(this);
        this.changeMobile_numberHandler = this.changeMobile_numberHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);
        this.changeClubsHandler = this.changeClubsHandler.bind(this);
        this.changeactivitiesHandler = this.changeactivitiesHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({firstName: student.firstName,
                lastName: student.lastName,
                emailId : student.emailId,
                password:student.password,
                    conformpassword:student.conformpassword,
                    roll_number:student.roll_number,
                    mobile_number:student.mobile_number,
                    department:student.department,  
                    clubs:student.clubs,
                    activities:student.activities

            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId , password:this.state.password, conformpassword:this.state.conformpassword , mobile_number:this.state.mobile_number, department:this.state.department, clubs:this.state.clubs, activities:this.state.activities};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeConformpasswordHandler= (event) => {
        this.setState({conformpassword: event.target.value});
    }
    changeroll_numberHandler= (event) => {
        this.setState({roll_number: event.target.value});

    }
    changemobile_numberHandler= (event) => {
        this.setState({mobile_number: event.target.value});
    }
    changedepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }
    changeclubHandler= (event) => {
        this.setState({club: event.target.value});
    }
    changeactivitiesHandler= (event) => {
        this.setState({activities: event.target.value});
    }





    cancel(){
        this.props.history.push('/student');
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
            <label for="first_Name">first_Name:</label>
            
            <input type="text" id="name" name="name" required/>
            value={this.state.firstName} onChange={this.changeFirstNameHandler}
            </div>
            <div className="form-group">
            <label for="last_Name">last_Name:</label>
            
            <input type="text" id="name" name="name" required/>
            value={this.state.lastName} onChange={this.changeLastNameHandler}
            </div>
            <div className="form-group">
            <label for="email">Email:</label>
            
            <input type="email" id="email" name="email" required/>
            value={this.state.emailId} onChange={this.changeEmailHandler}
            </div>
            <div className="form-group">
            <label for="password">Password:</label>
            
            <input type="password" id="password" name="password" required/>
            value={this.state.password} onChange={this.changePasswordHandler}
            </div>
            <div className="form-group">
            <label for=" Conformpassword"> ConformPassword:</label> 
            
            <input type=" Conformpassword" id=" Conformpassword" name=" Conformpassword" required/>
            value={this.state.conformpassword} onChange={this.changeConformpasswordHandler}
            </div>
            <div className="form-group">
            <label for=" Mobile_number"> Mobile_number:</label> 
            
            <input type=" Mobile_number" id=" Mobile_Number" name=" Mobile_Number" required/>
            value={this.state.mobile_number} onChange={this.changeMobile_numberHandler}
            </div>
            <div className="form-group">
         <label for=" roll_number"> roll_number:</label> 
         value={this.state.roll_number} onChange={this.changeroll_numberHandler}
         <input type=" roll_number" id=" roll_Number" name=" Mobile_Number" required/>
         </div>
         <div className="form-group">
         <label for=" post"> post:</label> 
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
            <label for=" activities"> activities:</label> 
            
            <input type=" activities" id=" activities" name=" activities" required/>
            value={this.state.activities} onChange={this.changeactivitiesHandler}
            </div>
            <button type="submit">Register</button>
            </form>
            </div>
            </div>
            )
            }
            
            
              }
export default UpdateStudentComponent
