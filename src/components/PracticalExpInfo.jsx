import PropTypes from 'prop-types';
import CustomInput from './CustomInput.jsx';

function PracticalExpInfo({
	companyName,
	positionTitle,
	mainResponsibilities,
	onChange,
}) {
	return (
		<div className="practicalInfo container">
			<fieldset>
				<legend>Practical experience Info</legend>
				<div className="inputContainer">
					<CustomInput
						label="Company Name: "
						id="companyName"
						placeholder="company name"
						name="companyName"
						value={companyName}
						onChange={onChange}
					/>
					<CustomInput
						label="Position Title: "
						id="positionTitle"
						name="positionTitle"
						placeholder="positionTitle"
						value={positionTitle}
						onChange={onChange}
					/>
					<CustomInput
						label="Main Responsibilities: "
						type="mainResponsibilities"
						id="mainResponsibilities"
						name="mainResponsibilities"
						placeholder="mainResponsibilities"
						value={mainResponsibilities}
						onChange={onChange}
					/>
				</div>
			</fieldset>
		</div>
	);
}

PracticalExpInfo.propTypes = {
	companyName: PropTypes.string,
	positionTitle: PropTypes.string,
	mainResponsibilities: PropTypes.string,
	pNumber: PropTypes.string,
	placeholder: PropTypes.string,
	pattern: PropTypes.string,
	size: PropTypes.string,
	onChange: PropTypes.func,
};

export default PracticalExpInfo;
