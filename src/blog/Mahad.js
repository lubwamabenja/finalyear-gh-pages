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

const sections = [{ title: "Kaluuma Mahad", url: "/mahad" }];
const steps = [
  {
    label: "Concept Paper",
    description: `I  Guided My Team On Why we should Consider The Blockchain 
    Technology and The Benefits It Provides. 
    I also came Up With Different Ideas For Our Final Year Project
    That Were Later Considered For the Final Concept Of our Project.`,
  },
  {
    label: "Data collection Plans ",
    description: `Together with my team, we engaged in the brainstorming exercise that helped us
      to come up with the various questions that would guide us during the interview,
       and secondary data collections methods.
       These questions helped us have tentatively complete data collection tools for the various methods.`,
  },
  {
    label: "Data collection tool design",
    description: `As a Team We Inquired of Dr. Joab Agaba On the Best Way To Collect Information Related To Our
    Final year Project.`,
  },

  {
    label: "FINAL SRS",
    description: `I documented The data collected from our Interviews,
     I also contributed to displaying the collected Data Graphically `,
  },
  {
    label: "FINAL REPORT",
    description: `I documented the Results questionnaires and semi structured interviews and helped in diplaying 
    the Data Graphically.
    As a team we made sure our document is signed by our supervisor before submission`,
  },
];
function Mahad() {
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

export default Mahad;
