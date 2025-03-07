import { useState } from 'react';
import GeneralInfo from './GeneralInfo.jsx';
import PropTypes from 'prop-types';
import EducationalExpInfo from './EducationalExpInfo.jsx';
import PracticalExpInfo from './PracticalExpInfo.jsx';
import '../styles/inputContainerStyles.css';
import '../styles/formContainerStyles.css';

function FormIndex({
	onSubmit,
	fName,
	lName,
	email,
	pNumber,
	schoolName,
	titleOfStudy,
	dateOfStudy,
	companyName,
	mainResponsibilities,
}) {
	const [formData, setFormData] = useState({
		fName: fName,
		lName: lName,
		email: email,
		pNumber: pNumber,
		schoolName: schoolName,
		titleOfStudy: titleOfStudy,
		dateOfStudy: dateOfStudy,
		companyName: companyName,
		positionTitle: titleOfStudy,
		mainResponsibilities: mainResponsibilities,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(formData); // Pass the form data to the parent component
	};

	const handleResetInputs = () => {
		setFormData({
			fName: '',
			lName: '',
			email: '',
			pNumber: '',
			schoolName: '',
			titleOfStudy: '',
			dateOfStudy: '',
			companyName: '',
			positionTitle: '',
			mainResponsibilities: '',
		});
	};

	return (
		<section className="formIndex container">
			<form className="form" onSubmit={handleSubmit}>
				<GeneralInfo
					fName={formData.fName}
					lName={formData.lName}
					email={formData.email}
					pNumber={formData.pNumber}
					onChange={handleInputChange}
				/>
				<EducationalExpInfo
					schoolName={formData.schoolName}
					titleOfStudy={formData.titleOfStudy}
					dateOfStudy={formData.dateOfStudy}
					onChange={handleInputChange}
				/>
				<PracticalExpInfo
					companyName={formData.companyName}
					positionTitle={formData.positionTitle}
					mainResponsibilities={formData.mainResponsibilities}
					onChange={handleInputChange}
				/>
				<div className="btnContainer">
					<button className="btn submit" type="submit">
						Submit
					</button>
					<button
						className="btn reset"
						type="button"
						onClick={handleResetInputs}
					>
						Reset
					</button>
				</div>
			</form>
		</section>
	);
}

FormIndex.propTypes = {
	onSubmit: PropTypes.func,
	fName: PropTypes.string,
	lName: PropTypes.string,
	email: PropTypes.string,
	pNumber: PropTypes.string,
	schoolName: PropTypes.string,
	titleOfStudy: PropTypes.string,
	dateOfStudy: PropTypes.string,
	companyName: PropTypes.string,
	mainResponsibilities: PropTypes.string,
};

export default FormIndex;
