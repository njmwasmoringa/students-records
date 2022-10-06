import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import * as crud from "../crud";

import "./addResult.css";

export default function AddResult({children, onSaved, defaultResult }) {

    const [formData, setFormData] = useState({
        studentname: defaultResult ? defaultResult.studentname : '',
        react: defaultResult ? defaultResult.react : '',
        ruby: defaultResult ? defaultResult.ruby : '',
        css: defaultResult ? defaultResult.css : '',
    });

    const [savingState, setSavingState] = useState(false);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    function addResult(event) {
        event.preventDefault();

        setSavingState(true);
        if (defaultResult) {
            crud.updateReult({ ...formData, id: defaultResult.id }).then(updatedResult => {
                setSavingState(false);
                onSaved(updatedResult);
                console.log(updatedResult);
            });
        }
        else {
            crud.createResult(formData).then(newResult => {
                setSavingState(false);
                onSaved(newResult);
                console.log(newResult);
            });
        }
    }

    return <Box >
        <form onSubmit={addResult}>
            <div>
                <TextField name="studentname" 
                    value={formData.studentname}
                    onChange={handleChange} 
                    label="Student Name"
                />
                {/* <label>Student Name</label>
            <input
                type="text"
                name="studentname"
                value={formData.studentname}
                onChange={handleChange} /> */}
            </div>
            <div>
                <TextField type="number" name="react" 
                    value={formData.react}
                    onChange={handleChange} 
                    label="React Score"
                />
                {/* <label>React Score</label>
                <input
                    type="text"
                    name="react"
                    value={formData.react}
                    onChange={handleChange} /> */}
            </div>
            <div>
                <TextField type="number" name="ruby" 
                    value={formData.ruby}
                    onChange={handleChange} 
                    label="Ruby Score"
                />
                {/* <label>Ruby Score</label>
                <input type="text" name="ruby"
                    value={formData.ruby}
                    onChange={handleChange} /> */}
            </div>
            <div>
                <TextField type="number" name="css" 
                    value={formData.css}
                    onChange={handleChange} 
                    label="CSS"
                />
                {/* <label>CSS</label>
                <input type="text" name="css"
                    value={formData.css}
                    onChange={handleChange} /> */}
            </div>
            <div>
                {children}
                <Button type="submit" disabled={savingState} variant="contained">{savingState ? 'Saving...' : 'Save Results'}</Button>
                {/* <button disabled={savingState}>{savingState ? 'Saving...' : 'Save Results'}</button> */}
            </div>
        </form>
    </Box>
}