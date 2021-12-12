import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import employeeService from '../services/EmployeeService'

const Employee = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () => {
        employeeService.getEmployees()   // promise
            .then(
                response => {
                    setEmployees(response.data)
                }
            )
            .catch(
                err => {
                    console.log('something went wrong...', err)
                }
            )
    }

    const deleteEmployee = (employeeId) => {
        employeeService.deleteEmployee(employeeId)
            .then(
                response => {
                    console.log('successfully deleted the employee!', response.data)
                }
            )
            .catch(
                err => {
                    console.error('something went wrong... could not delete the employee...', err)
                }
            )
    }

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
                                    <div className="d-grid gap-2 d-md-flex">
                                        <Link
                                            className="btn btn-primary"
                                            id="UpdateButton"
                                            to={`/myfirstreact/employees/edit/${employee.employeeId}`} // note: backticks
                                        >
                                            Update
                                        </Link>

                                        <div
                                            className="btn btn-primary"
                                            id="DeleteButton"
                                            onClick={() => deleteEmployee(employee.employeeId)}
                                        >
                                            Delete
                                        </div>
                                    </div>
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