import { useEffect, useState } from 'react'
import employeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");

    const saveEmployee = (e) => {
        const employee = { name, location, department };
        employeeService.postEmployee(employee) //promise
            .then(
                response => {
                    console.log("added new employee!", response.data)
                }
            )

            .catch(
                error => {
                    console.error("something went wrong...")
                }
            )
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
                        placeholder="Input employee name here"
                        onChange={
                            (e) => {
                                setName(e.target.value)
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
                        placeholder="Input employee location here"
                        onChange={
                            (e) => {
                                setLocation(e.target.value)
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
                        placeholder="Input employee department here"
                        onChange={
                            (e) => {
                                setDepartment(e.target.value)
                            }
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary">
                    onClick={(e) => saveEmployee(e)}

                    Save
                </button>
            </form >
        </div >
    )
}

export default AddEmployee;