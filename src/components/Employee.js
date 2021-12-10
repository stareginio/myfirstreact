import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
                    console.log('something went wrong...')
                }
            )
    })

    return (
        <div id="employee">
            <h2>List of Employees</h2>
            <table border="1.5">
                <tr>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                    <td>Action</td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.employeeId}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary"
                                        id="UpdateButton"
                                        to={`/edit/${employee.employeeId}`} // note: backticks
                                    >

                                        Update
                                    </Link>

                                </td>
                            </tr>
                        )
                    )
                }
            </table>
        </div>
    )
}

export default Employee;