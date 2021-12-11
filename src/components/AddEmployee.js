import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import employeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const { employeeId } = useParams();

    const navigate = useNavigate();
    const regex = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;

    // validates input name
    const handleNameChange = (e) => {
        if (e.target.value.match(regex) != null) {
            setName(e.target.value)
        }
        else {
            console.error('invalid character')
        }
    }

    // validates input location
    const handleLocationChange = (e) => {
        if (e.target.value.match(regex) != null) {
            setLocation(e.target.value)
        }
        else {
            console.error('invalid character')
        }
    }

    // validates input department
    const handleDepartmentChange = (e) => {
        if (e.target.value.match(regex) != null) {
            setDepartment(e.target.value)
        }
        else {
            console.error('invalid character')
        }
    }

    const saveEmployee = (e) => {
        e.preventDefault();

        // checks if each entry is not empty
        if (name && location && department) {
            // updates existing employee
            if (employeeId) {
                const employee = { employeeId, name, location, department };
                employeeService.putEmployee(employee) // promise
                    .then(
                        response => {
                            console.log('updated an existing employee!', response.data);
                            navigate('/employees');
                        }
                    )
                    .catch(
                        err => {
                            console.error('something went wrong... could not update an existing employee...', err)
                        }
                    )
            }

            // adds new employee
            else {
                const employee = { name, location, department };
                employeeService.postEmployee(employee) // promise
                    .then(
                        response => {
                            console.log('added a new employee!', response.data)
                            navigate('/employees')
                        }

                    )
                    .catch(
                        err => {
                            console.error('something went wrong... could not add a new employee...', err)
                        }
                    )
            }
        }

        else {
            console.error('entries are invalid...')
        }
    }

    useEffect(() => {
        if (employeeId) {
            employeeService.getEmployee(employeeId) // promise
                .then(
                    employee => {
                        setName(employee.data.name);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.department);
                    }
                )
                .catch(
                    () => {
                        console.log("something went wrong...")
                    }
                )
        }

    }, [])  // empty array for entering fields

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
                        value={name}
                        id="InputName"
                        placeholder="Enter the name"
                        onChange={handleNameChange}
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
                        value={department}
                        id="InputDepartment"
                        placeholder="Enter the department"
                        onChange={handleDepartmentChange}
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
                        value={location}
                        id="InputLocation"
                        placeholder="Enter the location"
                        onChange={handleLocationChange}
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

// references
// regex: https://stackoverflow.com/questions/52487915/regular-expression-to-validate-accents-spaces-and-only-letters
// validation: https://stackoverflow.com/questions/41936524/validation-of-form-input-fields-in-react