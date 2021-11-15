import { useEffect, useState } from 'react'
import employeeService from '../services/employeeService'

const Employee = () => {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        employeeService.getEmployee()   // promise
            .then(response => {
                setEmployee(response.data)
            })
            .catch(() => {
                console.log('sorry na ha :P')
            })
    })

    return (
        <div>
            <h3>List of Employees</h3>
            <div>
                <table border="1">
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                    </tr>
                    {
                        employee.map(employee => {
                            <tr>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Employee;