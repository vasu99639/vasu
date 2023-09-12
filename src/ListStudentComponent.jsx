import React, { Component } from 'react'
import StudentService from './services/StudentService'
import { Link } from 'react-router-dom'

class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-Student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/Linkdd-Student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/Linkdd-Student/_add');
        this.state.students.map(
            Student=>
            <tr key={Student.id}>
                <td>{Student.firstName}</td>
                <td>{Student.lastName}</td>
                <td>{Student.roll_number}</td>
                <td>{Student.email}</td>
                <td>{Student.password}</td>
                <td>{Student.conformpassword}</td>
                <td>{Student.mobile_number}</td>
                <td>{Student.department}</td>
                <td>{Student.clubs}</td>
                <td>{Student.activities}</td>
             </tr>
        )
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
<input type="text" id="name" name="name" required/>
value={this.state.firstName} onChange={this.changefirstNameHandler}
</div>
<div className="form-group">
<label htmlFor="last_Name">last_Name:</label>
<input type="text" id="name" name="name" required/>
value={this.state.lastName} onChange={this.changelastNameHandler}
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required/>
value={this.state.email} onChang={this.changeEmailHandler}
</div>
<div className="form-group">
<label htmlFor="password">Password:</label>

<input type="password" id="password" name="password" required/>

value={this.state.password} onChange={this.changePasswordHandler}
</div>
<div className="form-group">
<label htmlFor=" Conformpassword"> ConformPassword:</label> 
<input type=" Conformpassword" id=" Conformpassword" name=" Conformpassword" required/>
value={this.state.conformpassword} onChange={this.changeConformpasswordHandler}
</div>
<div className="form-group">
<label htmlFor=" Mobile_number"> Mobile_number:</label> 
<input type=" Mobile_number" id=" Mobile_Number" name=" Mobile_Number" required/>
value={this.state.mobile_number} onChange={this.changeMobile_numberHandler}
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
<input type=" activities" id=" activities" name=" activities" required/>
value={this.state.activities} onChange={this.changeactivitiesHandler}
</div>
</form>
</div>
</div>
)
}


  }

export default ListStudentComponent