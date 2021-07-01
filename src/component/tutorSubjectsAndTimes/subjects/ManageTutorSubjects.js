import {useState} from 'react';
import SubjectItemList from './SubjectItemList';
import SubjectInput from './SubjectInput';
import '../tutorSubjectsAndTimes.css';

/*
  Name: ManageTutorSubjects
  Author: Colum Murphy

  This component adds to, deletes from, and displays the tutors 
  subjects list.  This component has 2 child components SubjectItemList
  and SubjectInput.

  Props: userId, error 
  This component will take the tutors userId as a prop.
  It will pass server errors up to App level state.

  Desctiption of Code Not Currently Implemented:
  1.  When this component loads, a GET request will be made to the server
      to get the tutors subjects.  
  2.  When a new subject is added by a tutor, a POST request will be
      made to the server.
  3.  When a subject is deleted by a tutor, a DELETE request will be
      made to the server.
*/


const ManageTutorSubjects = () => {

  // tutor subjects state, containing dummy data
  const [tutorSubjects, setTutorSubjects] = useState(
    [
      {id: 1, 
       subject: 'Grade 12 Algebra', 
       description: 'I am available to provide tuition on Grade 10 - 12 Algebra.'
      },
      {id: 2, 
       subject: 'Grade 12 Geometry', 
       description: 'I am available to provide tuition on grade 10 - 12 Geometry.'
      },
    ]
  );

  // Function deletes a subject from the list of subjects.
  const deleteSubject = (id) => {

    // filter using the subject id
    const filteredSubjects = 
      tutorSubjects.filter(tutorSubject => tutorSubject.id !== id);

    // update the tutorSubjects  
    setTutorSubjects(filteredSubjects);
  }

  // Function adds a subject to the list of subjects.
  const addNewSubject = (newSubject) => {

    // Generate a dummy id for testing 
    // The actual id will come from the database
    newSubject.id = Math.floor(Math.random() * 1000);
    
    // add to the tutor subjects 
    const newTutorSubjects = [...tutorSubjects, newSubject];  

    // update the tutorSubjects state
    setTutorSubjects(newTutorSubjects);
  }

  // handle any errors from the subjectInput component.
  const error = (err) => {
    // handle input error
  }

  return (    
    <div className='subjectContainer'>
      <div className='listHeading'>
        Tutor Subjects
      </div>  
      <SubjectItemList 
        tutorSubjects={tutorSubjects} 
        deleteSubject={deleteSubject} 
      />
      <SubjectInput 
        addNewSubject={addNewSubject}
        error={error}
      />
    </div>
  )
}

export default ManageTutorSubjects;
