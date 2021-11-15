import httpclient from "../commons/httpclient"

const getEmployee = () => {
    return httpclient.get('/employees')
}

export default { getEmployee };