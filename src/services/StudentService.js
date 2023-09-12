import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8082/api/reg";

class StudentService {

    getStudents(){
        return axios.get(`${STUDENT_API_BASE_URL}/students`);
    } 

    createStudent(student){
        return axios.post(`${STUDENT_API_BASE_URL}/students`, student);
    }

    getStudentById(studentId){
        return axios.get(`${STUDENT_API_BASE_URL}/students` + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(`${STUDENT_API_BASE_URL}/students` + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete(`${STUDENT_API_BASE_URL}/students` + '/' + studentId);
    }
}
export default new StudentService()