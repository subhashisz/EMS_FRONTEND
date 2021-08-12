import axios from 'axios';
import { EMPLOYEE_MODULE_BASE_URL } from '../constants/EMSConstants';

// const EMPLOYEE_MODULE_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_MODULE_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_MODULE_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_MODULE_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_MODULE_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_MODULE_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()