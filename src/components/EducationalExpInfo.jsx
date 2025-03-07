import PropTypes from 'prop-types';
import CustomInput from './CustomInput.jsx';

function EducationalExpInfo({
	schoolName,
	titleOfStudy,
	dateOfStudy,
	onChange,
}) {
	return (
		<div className="educationalExp container">
			<fieldset>
				<legend>Educational experience Info</legend>
				<div className="inputContainer">
					<CustomInput
						label="School Name: "
						id="schoolName"
						placeholder="schoolName"
						name="schoolName"
						value={schoolName}
						onChange={onChange}
					/>
					<CustomInput
						label="Title of Study: "
						id="titleOfStudy"
						name="titleOfStudy"
						placeholder="titleOfStudy"
						value={titleOfStudy}
						onChange={onChange}
					/>
					<CustomInput
						label="Date of Study: "
						type="dateOfStudy"
						id="dateOfStudy"
						name="dateOfStudy"
						placeholder="dateOfStudy"
						value={dateOfStudy}
						onChange={onChange}
					/>
				</div>
			</fieldset>
		</div>
	);
}

EducationalExpInfo.propTypes = {
	schoolName: PropTypes.string,
	titleOfStudy: PropTypes.string,
	dateOfStudy: PropTypes.string,
	pNumber: PropTypes.string,
	placeholder: PropTypes.string,
	pattern: PropTypes.string,
	size: PropTypes.string,
	onChange: PropTypes.func,
};

export default EducationalExpInfo;
