import { useState } from 'react';
import '../tutorSubjectsAndTimes.css';

/*
  Name: SubjectInput
  Author: Colum Murphy

  This component allows the user to add a new subject item
  to the tutor subject list.  Invalid data in any input field
  results in a error message being passed to the parent component. 
*/

const SubjectInput = (props) => {

  const { addNewSubject, error } = props;   

  const [newSubject, setNewSubject] = useState({
    subject: '',
    description: '',
  });

  // called when a input field is changed
  const onChange = (e) => {
    setNewSubject({ ...newSubject, [e.target.name]: e.target.value }); 
  }
  
  // called when the Add New Subject button is clicked
  const onAddButtonClick = () => {

    // check the validity of the two input fields
    if (newSubject.subject === '' || newSubject.description === '') {

      // return an error message to the parent component
      error({ msg: 'Please enter a valid Subject and Description'})
      return;             
    }

    // add the new subject to the tutor subjects list
    addNewSubject(newSubject);

    // clear the subject and description fields
    setNewSubject({ subject: '', description: '' });    
  }

  return (
    <div>
      <div className="inputGroup">
        <label htmlFor="subjectField">
          Subject
        </label>
        <input 
          type="text" 
          name="subject" 
          id="subjectField"
          value={newSubject.subject}
          onChange={(e) => onChange(e)} 
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="descriptionField">
          Subject Description
        </label>
        <input 
          type="text" 
          name="description" 
          id="descriptionField" 
          value={newSubject.description}
          onChange={(e) => onChange(e)}
        />
      </div>      
      <div className="buttonGroup">
        <button 
          className="inButton inButton-block inButton-blue"
          onClick={onAddButtonClick}
        >
          Add New Subject
        </button>
      </div>
    </div>
  )
}

export default SubjectInput;
