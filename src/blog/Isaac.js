import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const sections = [{ title: "Lubwama Isaac", url: "/isaac" }];
const steps = [
  {
    label: "Concept Paper",
    description: `I came Up With Different Ideas For Our Final Year Project
     That Were Later Considered For the Fanal Concept Of our Project.`,
  },
  {
    label: "Data collection Plans ",
    description: `
      I Came Up With Different Fields/Places That We Would Consider To Gather The Data Relevant 
      To Ur Project.
      As a team, we managed to compose a data collection plan in accordance\
       to the template that had been handed to us. I actively participated in \
       brainstorming the right answers that\
      we had to add to the interview questions of the data collection plan. `,
  },
  {
    label: "Data collection tool design",
    description: `I Inquired Of Places Where we had Considered to gather Our Information in our Data Collection Plan`,
  },

  {
    label: "FINAL SRS",
    description: `I Contributed by giving out questionares to the targeted population,
     to help gather The Data Required For our Final Year Project.
     I also made Sure I recorded all the interviews that we participated in as a team. `,
  },
  {
    label: "FINAL REPORT",
    description: `I documented the Results questionnaires and semi structured interviews and helped in diplaying 
    the Data Graphically.
    As a team we made sure our document is signed by our supervisor before submission`,
  },
];
function Isaac() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Header
        title="Government Fund Allocation &amp; Tracking System over Blockchain"
        sections={sections}
      />
      <div className="container d-flex justify-content-center">
        <Box sx={{ maxWidth: 700 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </>
  );
}

export default Isaac;
