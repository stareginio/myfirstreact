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
                    <Route path="/myfirstreact" exact element={<Home />} />
                    <Route path="/employees" exact element={<Employee />} />
                    <Route path="/add" exact element={<AddEmployee />} />
                    <Route path="/edit/:id" exact element={<AddEmployee />} />
                    <Route path="*" exact element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;

// directory for github page
// https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij
// add/remove "/myfirstreact"