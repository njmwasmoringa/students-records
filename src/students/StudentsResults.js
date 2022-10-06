import "./students.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from "@mui/system";

export default function StudentsResults({children, studentsResults, edit, Delete }){
    const columns = [
        {
            field: "studentname",
            headerName: "Name",
            width:150
        },
        {
            field: "react",
            headerName: "React"
        },
        {
            field: "ruby",
            headerName: "Ruby"
        },
        {
            field: "",
            headerName: "Actions"
        }
    ]

    function handRowClick(e){
        console.log(e);
        edit(e.row);
    }

    return <Box sx={{ height: "90vh", width: '550px' }}>
        {children}
        <DataGrid rows={studentsResults} columns={columns} 
            pageSize={100}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            onRowClick={handRowClick}
        />
    </Box>
    
    /* <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>React</th>
                <th>Ruby</th>
                <th>CSS</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { studentsResults.map(result=><tr key={result.id}>
                <td>{result.studentname}</td>
                <td>{result.react}</td>
                <td>{result.ruby}</td>
                <td>{result.css}</td>
                <td>
                    <button type="button" onClick={()=>edit(result)}>Edit</button>
                    <button type="button" onClick={()=>Delete(result.id)}>Delete</button>
                </td>
            </tr>) }
            
        </tbody>
    </table> */
}