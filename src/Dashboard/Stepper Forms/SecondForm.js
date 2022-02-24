import React from 'react';
import {
    TextField,
    TextareaAutosize,
} from "../../Material  UI/Material";
const SecondForm = ({ tacForm, onFormChange }) => {
    return (
        <div>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Tac Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={tacForm.name}
                onChange={onFormChange}
            />
            <TextareaAutosize
                id="description"
                aria-label="Description"
                placeholder="Description"
                name="description"
                value={tacForm.description}
                style={{ width: 600, height: 100 }}
                onChange={onFormChange}
            />
        </div>
    );
};

export default SecondForm;