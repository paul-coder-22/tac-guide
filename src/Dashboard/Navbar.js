import React, { useState } from "react";
import { tacRef } from '../firebase';

import {
    Button,
    Typography,
    AppBar,
    Toolbar,
    Stack,
    Add,
    Box,
    Modal,
    Stepper,
    StepButton,
    Step,
    Grid
} from "../Material  UI/Material";
import ImageForm from "./Stepper Forms/ImageForm";
import SecondForm from "./Stepper Forms/SecondForm";

const steps = [
    "Tac Description",
    "Upload Image",
    "Create Guide",
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [tacForm, setForm] = useState({
        name: "",
        description: ""
    })

    /* Modal Handle */
    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(false);

    /* Stepper Handle */
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    /* Handle Stepper Steps  */
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        /* tacRef.add({
            ...tacForm
        }) */
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const onChangeForm = (e) => {
        console.log(e.target.value)
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Tac-Guide
                    </Typography>
                    <Stack direction="row" spacing={2} mx={1}>
                        <Button
                            onClick={() => handleOpen()}
                            variant="contained"
                            endIcon={<Add />}
                        >
                            Add
                        </Button>
                    </Stack>
                    <Modal
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Grid component="span"
                                onClick={handleClose}
                                style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}  >
                                X
                            </Grid>
                            <br />
                            <Stepper nonLinear activeStep={activeStep}>
                                {steps.map((label, index) => (
                                    <Step key={label} completed={completed[index]}>
                                        <StepButton color="inherit" onClick={handleStep(index)}>
                                            {label}
                                        </StepButton>
                                    </Step>
                                ))}
                            </Stepper>
                            <div>
                                {allStepsCompleted() ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                            <Box sx={{ flex: "1 1 auto" }} />
                                            <Button onClick={handleReset}>Reset</Button>
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            Step {activeStep + 1}
                                            {activeStep === 0 ?
                                                <SecondForm tacForm={tacForm} onFormChange={onChangeForm} /> :
                                                activeStep === 1 ? <ImageForm /> :
                                                    ""
                                            }

                                        </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                                            <Button
                                                color="inherit"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: "1 1 auto" }} />
                                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                Next
                                            </Button>
                                            {activeStep !== steps.length &&
                                                (completed[activeStep] ? (
                                                    <Typography
                                                        variant="caption"
                                                        sx={{ display: "inline-block" }}
                                                    >
                                                        Step {activeStep + 1} already completed
                                                    </Typography>
                                                ) : (
                                                    <Button onClick={handleComplete}>
                                                        {completedSteps() === totalSteps() - 1
                                                            ? "Finish"
                                                            : "Complete Step"}
                                                    </Button>
                                                ))}
                                        </Box>
                                    </React.Fragment>
                                )}
                            </div>
                        </Box>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;

