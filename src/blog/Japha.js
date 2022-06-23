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

const sections = [{ title: "KASOZI JAPHA", url: "/isaac" }];
const steps = [
  {
    label: "Concept Paper",
    description: `I came Up With Different Ideas For Our Final Year Project
    That Were Later Considered For the Fanal Concept Of our Project.`,
  },
  {
    label: "Data collection Plans ",
    description: `
      I Personally Created A Google Document And Made Sure Every One Contributed to the Data Collection Plan
      I also endeavored to check for grammar, spelling mistakes\
       and any other abominable content of this document to make sure it was to the standards as\
       required. All work on this item was concluded on the 2nd of March, 2022`,
  },
  {
    label: "Data collection tool design",
    description: `
    I designed The Questions That would be asked
      during the interviews to gather the information required for our project related to our research questions.
       `,
  },

  {
    label: "FINAL SRS",
    description: `I Helped In documenting the design constraints and 
    performance requirements that contributed to the final SRS document.
    I also collected the letter from the head of department  that allowed
     to access different fields for data collection `,
  },
  {
    label: "FINAL REPORT",
    description: `I came up with the recommendations and conclusions For The Final Report.
    As a team we made sure our document is signed by our supervisor before submission`,
  },
];
function Jaffar() {
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

export default Jaffar;
