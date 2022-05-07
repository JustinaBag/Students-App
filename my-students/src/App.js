import './App.css';
import StudentAddForm from './components/Form/StudentAddForm';
import StudentList from './components/StudentList';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col"> 
            <StudentAddForm />
        </div>
      </div>
      <div className="row">
        <div className="col"> 
            <StudentList />
        </div>
      </div>
    </div>
    
  );
}

export default App;
