import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const steps = ['Shipping address', 'Payment details', 'Review your order']
// const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
	switch (step) {
		case 0:
			return <AddressForm formField={formField} />
		case 1:
			return <PaymentForm formField={formField} />
		case 2:
			return <ReviewOrder />
		default:
			return <div>Not Found</div>
	}
}

export default function CreateHackathon() {
	const [activeStep, setActiveStep] = useState(0)
	const currentValidationSchema = validationSchema[activeStep]
	const isLastStep = activeStep === steps.length - 1

	function _sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function _submitForm(values, actions) {
		await _sleep(1000)
		alert(JSON.stringify(values, null, 2))
		actions.setSubmitting(false)

		setActiveStep(activeStep + 1)
	}

	function _handleSubmit(values, actions) {
		if (isLastStep) {
			_submitForm(values, actions)
		} else {
			setActiveStep(activeStep + 1)
			actions.setTouched({})
			actions.setSubmitting(false)
		}
	}

	function _handleBack() {
		setActiveStep(activeStep - 1)
	}

	return (
		<React.Fragment>
			<Typography component='h1' variant='h4' align='center'>
				Checkout
			</Typography>
			<Stepper activeStep={activeStep} className={classes.stepper}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<React.Fragment>
				{activeStep === steps.length ? (
					<CheckoutSuccess />
				) : (
					<Form
						initialValues={formInitialValues}
						validationSchema={currentValidationSchema}
						onSubmit={_handleSubmit}
					>
						{({ isSubmitting }) => (
							<Form id={formId}>
								{_renderStepContent(activeStep)}

								<div>
									{activeStep !== 0 && <Button onClick={_handleBack}>Back</Button>}
									<div>
										<Button
											disabled={isSubmitting}
											type='submit'
											variant='contained'
											color='primary'
											className={classes.button}
										>
											{isLastStep ? 'Place order' : 'Next'}
										</Button>
										{isSubmitting && <CircularProgress size={24} />}
									</div>
								</div>
							</Form>
						)}
					</Form>
				)}
			</React.Fragment>
		</React.Fragment>
	)
}
