import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
    { name: 'Peter H.', salary: 800, increase: false },
    { name: 'Mark R.', salary: 3000, increase: true },
    { name: 'Roy T.', salary: 5000, increase: false },
    { name: 'Grace M.', salary: 1500, increase: true },
    { name: 'Caren O.', salary: 4000, increase: false },
];

function App() {
    return (
        <div className='app'>
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;