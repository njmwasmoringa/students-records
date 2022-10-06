import logo from './logo.svg';
import './App.css';
import Template from './Template';
import StudentsResults from './students/StudentsResults';
import { useEffect, useState } from 'react';
import AddResult from './students/AddResult';
import * as crud from './crud';
import { Button } from '@mui/material';

function App() {

  const [addingResult, setAddingResult] = useState(false);
  const [studentResult, setStudentResult] = useState([]);
  const [editingResult, setEditingResult] = useState();

  useEffect(()=>{
    crud.getAllReults().then(results=>{
      setStudentResult(results);
    });
  }, []);

  function onResultSaved(newResult){
    if(editingResult){
      const index = studentResult.findIndex(r=>r.id == newResult.id);
      let templResults = [...studentResult];
      templResults[index] = newResult;
      setStudentResult(templResults);
    }
    else {
      setStudentResult([ ...studentResult, newResult ]);
    }
    setAddingResult(false);
  }

  function onEdit(result){
    setEditingResult(result);
    setAddingResult(true);
  }

  function onDelete(id){
    crud.Delete(id).then(resp=>{
      const index = studentResult.findIndex(r=>r.id == id);
      let templResults = [...studentResult];
      templResults.splice(index, 1);
      setStudentResult(templResults);
    });
  }

  return (
    <Template>
      {addingResult ? 
      
        <AddResult onSaved={onResultSaved} defaultResult={editingResult}>
          <Button onClick={ ()=>setAddingResult(!addingResult) } >Cancel</Button>
        </AddResult>: 

        <StudentsResults 
          studentsResults={studentResult} 
          edit={onEdit} Delete={onDelete}>
            
          <div style={{displa:"flex", justifyContent:"end", width:"100%"}}>
            { !addingResult &&
              <Button variant="contained" type="button" onClick={ ()=>setAddingResult(!addingResult) } >
                Create Result
              </Button>
            }
          </div>
        </StudentsResults>}
    </Template>
  );
}

export default App;
