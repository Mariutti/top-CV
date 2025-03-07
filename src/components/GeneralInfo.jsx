import PropTypes from 'prop-types';
import CustomInput from './CustomInput.jsx';

function GeneralInfo({ fName, lName, email, pNumber, onChange }) {
	return (
		<div className="generalInfo container">
			<fieldset>
				<legend>General Info</legend>
				<div className="inputContainer">
					<CustomInput
						label="First Name: "
						id="fName"
						placeholder="First Name"
						name="fName"
						value={fName}
						onChange={onChange}
					/>
					<CustomInput
						label="Last Name: "
						id="lName"
						name="lName"
						placeholder="Last Name"
						value={lName}
						onChange={onChange}
					/>
					<CustomInput
						label="e-mail: "
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={onChange}
					/>
					<CustomInput
						label="phone number: "
						type="tel"
						id="pNumber"
						name="pNumber"
						placeholder="(XX)XXXXX-XXXX"
						value={pNumber}
						onChange={onChange}
					/>
				</div>
			</fieldset>
		</div>
	);
}

GeneralInfo.propTypes = {
	fName: PropTypes.string,
	lName: PropTypes.string,
	email: PropTypes.string,
	pNumber: PropTypes.string,
	placeholder: PropTypes.string,
	pattern: PropTypes.string,
	size: PropTypes.string,
	onChange: PropTypes.func,
};

export default GeneralInfo;
