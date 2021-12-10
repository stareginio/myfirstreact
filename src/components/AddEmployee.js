import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import employeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();
    const { employeeId } = useParams();

    useEffect(() => {
        if (employeeId) {
            employeeService.getEmployee(employeeId)
                .then(
                    response => {
                        setName(response.data.name);
                        setLocation(response.data.location);
                        setDepartment(response.data.department);
                    }
                )
                .catch(
                    error => {
                        console.error("error!")
                    }
                )
        }

        else {
            console.log("employee ID does not exist...")
        }
    })

    const saveEmployee = (e) => {
        e.preventDefault();

        // updates existing employee
        if (employeeId) {
            const employee = { employeeId, name, location, department };
            employeeService.postEmployee(employee) //promise
                .then(
                    response => {
                        console.log('updated employee!', response.data)
                        navigate('/employee')
                    }
                )

                .catch(
                    error => {
                        console.error('something went wrong...')
                    }
                )
        }

        // adds new employee
        else {
            const employee = { name, location, department };
            employeeService.postEmployee(employee) //promise
                .then(
                    response => {
                        console.log('added new employee!', response.data)
                        navigate('/employee')
                    }
                )

                .catch(
                    error => {
                        console.error('something went wrong...')
                    }
                )
        }
    }

    return (
        <div>
            <h2>Add Employee</h2>

            <form>
                <div className="form-entry">
                    <label
                        for="InputName"
                        className="form-label">

                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputName"
                        placeholder="Enter the name"
                        onChange={
                            (e) => {
                                setName(e.target.value)
                            }
                        }
                    />
                </div>

                <div className="form-entry">
                    <label
                        for="InputDepartment"
                        className="form-label">

                        Department
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputDepartment"
                        placeholder="Enter the department"
                        onChange={
                            (e) => {
                                setDepartment(e.target.value)
                            }
                        }
                    />
                </div>

                <div className="form-entry">
                    <label
                        for="InputLocation"
                        className="form-label">

                        Location
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputLocation"
                        placeholder="Enter the location"
                        onChange={
                            (e) => {
                                setLocation(e.target.value)
                            }
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    id="SaveButton"
                    onClick={(e) => saveEmployee(e)}>

                    Save
                </button>
            </form >
        </div >
    )
}

export default AddEmployee;