import PropTypes from 'prop-types';

function CustomInput({
	label,
	id,
	name,
	value,
	type = 'text',
	placeholder,
	size,
	onChange,
}) {
	return (
		<label htmlFor={id} className='customLabel'>
			{label}
			<input
				id={id}
				className='customInput'
				name={name}
				type={type}
				placeholder={placeholder}
				size={size}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}

CustomInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	pattern: PropTypes.string,
	size: PropTypes.string,
	onChange: PropTypes.func,
};

export default CustomInput;
