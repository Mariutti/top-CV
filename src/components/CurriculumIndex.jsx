import PropTypes from 'prop-types';

function CurriculumIndex({
	fName,
	lName,
	email,
	pNumber,
	schoolName,
	titleOfStudy,
	dateOfStudy,
	companyName,
	mainResponsibilities,
	handleEdit,
}) {
	return (
		<section className="cvIndex container">
			<ul>
				<li>
					<div>First Name: {fName}</div>
				</li>
				<li>
					<div>Last Name: {lName}</div>
				</li>
				<li>
					<div>e-mail: {email}</div>
				</li>
				<li>
					<div>Phone Number: {pNumber}</div>
				</li>
				<li>
					<div>School: {schoolName}</div>
				</li>
				<li>
					<div>Tittle of Study: {titleOfStudy}</div>
				</li>
				<li>
					<div>Date of Study: {dateOfStudy}</div>
				</li>
				<li>
					<div>Company: {companyName}</div>
				</li>
				<li>
					<div>Main Responsibilities: {mainResponsibilities}</div>
				</li>
			</ul>
			<button className="btn edit" type="button" onClick={handleEdit}>
				edit
			</button>
		</section>
	);
}

CurriculumIndex.propTypes = {
	fName: PropTypes.string,
	lName: PropTypes.string,
	email: PropTypes.string,
	pNumber: PropTypes.string,
	schoolName: PropTypes.string,
	titleOfStudy: PropTypes.string,
	dateOfStudy: PropTypes.string,
	companyName: PropTypes.string,
	mainResponsibilities: PropTypes.string,
	handleEdit: PropTypes.func,
};

export default CurriculumIndex;
