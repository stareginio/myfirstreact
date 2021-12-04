import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import employeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        // updates existing employee
        if (id) {
            const employee = { id, name, location, department };
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
                        class="form-label">

                        Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
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
                        class="form-label">

                        Department
                    </label>
                    <input
                        type="text"
                        class="form-control"
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
                        class="form-label">

                        Location
                    </label>
                    <input
                        type="text"
                        class="form-control"
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