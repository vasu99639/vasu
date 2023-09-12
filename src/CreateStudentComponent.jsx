import React, { Component } from 'react';
import StudentService from './services/StudentService';
// import "./css/registration.css";
import { Link } from 'react-router-dom';
// import { SetStateAction } from 'react';


class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
           // id: this.props.match.params.id,
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
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConformpasswordHandler = this.changeConformpasswordHandler.bind(this);
        this.changemobile_numberHandler = this.changemobile_numberHandler.bind(this);
        this.changedepartmentHandler = this.changedepartmentHandler.bind(this);
        this.changeclubHandler = this.changeclubHandler.bind(this);
        this.changeactivitiesHandler = this.changeactivitiesHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let Student = res.data;
                this.setState({firstName: Student.firstName,
                    lastName: Student.lastName,
                    emailId : Student.emailId,
                    password:Student.password,
                    conformpassword:Student.conformpassword,
                    roll_number:Student.roll_number,
                    mobile_number:Student.mobile_number,
                    department:Student.department,
                    clubs:Student.clubs,
                    activities:Student.activities


                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('Student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
    }
    
    changefirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changelastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
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
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
// {/* import { Link } from "react-router-dom"; */}
// {/* import "./css/registration.css"; */}
// {/* export function Registration()  */}
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
value={this.state.firstName} onChange={this.changefirstNameHandler}
</div>
<div className="form-group">
<label for="last_Name">last_Name:</label>

<input type="text" id="name" name="name" required/>
value={this.state.lastName} onChange={this.changelastNameHandler}
</div>
<div className="form-group">
<label for="email">Email:</label>

<input type="email" id="email" name="email" required/>
value={this.state.emailId} onChang={this.changeEmailHandler}
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
<button className="btn btn-success" onClick={this.saveOrUpdateGrievance}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
<button type="submit">Register</button>
</form>
</div>
</div>
)
}


  }

export default CreateStudentComponent
