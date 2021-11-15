const Employee = () => {
    const [employee, setEmployee] = useState([])

    useEffect(
        () => {
            EmployeeService.getEmployee()   // promise
                .then(response => {
                    setEmployee(response.data)
                })
                .catch(() => {
                    console.log('')
                })
        }
    )

    return (
        <div>
            <h1>List of Employees</h1>
            <div>
                <table border="1">
                    <tr>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Department</td>
                    </tr>{
                        employee.map(employee => {
                            <tr>
                                <td>[employee.name]</td>
                                <td>[employee.department]</td>
                                <td>[employee.location]</td>
                            </tr>
                        })
                    }<tr>

                    </tr>
                </table>
            </div>
        </div>
    )
}