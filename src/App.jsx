// import { useState } from 'react'
import { useState } from 'react';
import './App.css';
import FormIndex from './components/FormIndex.jsx';
import CurriculumIndex from './components/CurriculumIndex.jsx';

function App() {
	const [contact, setContact] = useState({
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
	const [toggleEdit, setToggleEdit] = useState(false);

	const onSubmitData = (formData) => {
		setContact(formData);
		setToggleEdit(() => !toggleEdit);
	};

	const onHandleEdit = () => {
		setToggleEdit(() => !toggleEdit);
	};

	return (
		<div className="App">
			<h1 className="header">Curriculum Vitae</h1>
			{toggleEdit ? (
				<FormIndex
					onSubmit={onSubmitData}
					toggleForm={toggleEdit}
					fName={contact.fName}
					lName={contact.lName}
					email={contact.email}
					pNumber={contact.pNumber}
					schoolName={contact.schoolName}
					titleOfStudy={contact.titleOfStudy}
					dateOfStudy={contact.dateOfStudy}
					companyName={contact.companyName}
					positionTitle={contact.positionTitle}
					mainResponsibilities={contact.mainResponsibilities}
					/>
				) : (
					<CurriculumIndex
					toggleCV={!toggleEdit}
					fName={contact.fName}
					lName={contact.lName}
					email={contact.email}
					pNumber={contact.pNumber}
					schoolName={contact.schoolName}
					titleOfStudy={contact.titleOfStudy}
					dateOfStudy={contact.dateOfStudy}
					companyName={contact.companyName}
					positionTitle={contact.positionTitle}
					mainResponsibilities={contact.mainResponsibilities}
					handleEdit={onHandleEdit}
				/>
			)}
			{/* <FormIndex onSubmit={onSubmitData} toggleForm={toggleEdit} />
			<CurriculumIndex
				toggleCV={!toggleEdit}
				fName={contact.fName}
				// lName={contact.lName}
				// email={contact.email}
				// pNumber={contact.pNumber}
				schoolName={contact.schoolName}
				// titleOfStudy={contact.titleOfStudy}
				// dateOfStudy={contact.dateOfStudy}
				companyName={contact.companyName}
				// positionTitle={contact.positionTitle}
				// mainResponsibilities={contact.mainResponsibilities}
				handleEdit={onHandleEdit}
			/> */}
		</div>
	);
}

export default App;
