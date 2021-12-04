import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Employee from './Employee';
import AddEmployee from './AddEmployee';
import PageNotFound from './PageNotFound';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/myfirstreact" element={<Home />} />
                    <Route exact path="https://stareginio.github.io/myfirstreact/employees" element={<Employee />} />
                    <Route exact path="/add" element={<AddEmployee />} />
                    <Route exact path="/edit/:id" element={<AddEmployee />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;

// directory for github page
// https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij
// add/remove "/myfirstreact"