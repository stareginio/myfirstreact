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
                    <Route path="/" exact element={<Home />} />
                    <Route path="/employee" exact element={<Employee />} />
                    <Route path="/add" exact element={<AddEmployee />} />
                    <Route path="*" exact element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;

// references
// https://dev.to/janjibdev/problem-with-react-router-app-and-github-pages-lij