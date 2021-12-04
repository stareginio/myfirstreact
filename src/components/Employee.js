import { useEffect, useState } from 'react'
import employeeService from '../services/EmployeeService'

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        employeeService.getEmployees()   // promise
            .then(
                response => {
                    setEmployees(response.data)
                }
            )
            .catch(
                () => {
                    console.log('sorry na ha :P')
                }
            )
    })

    return (
        <div id="employee">
            <h2>List of Employees</h2>
            <table border="1.5">
                <tr>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Department</td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>
                        )
                    )
                }
            </table>
        </div>
    )
}

export default Employee;