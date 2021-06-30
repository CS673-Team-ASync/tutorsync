import ManageTutorSubjects from './subjects/ManageTutorSubjects';
import ManageTutorTimes from './times/ManageTutorTimes';

/*
  Name: TutorSubjectsAndTimes
  Author: Colum Murphy

  This component combines the L.H.S. and R.H.S. of wireframe 5a
  using a Bootstrap container.  
*/

const TutorSubjectsAndTimes = () => {
  return (
    <div className='pageContainer'>

      <div className='container-fluid'>
        <div className='row rowContainer justify-content-around'>
          <div className='col-5 colContainer'>
            <ManageTutorSubjects />
          </div>
          <div className='col-5 colContainer'>
            <ManageTutorTimes />
          </div>
        </div>  
      </div>

    </div>       
  )
}

export default TutorSubjectsAndTimes;
