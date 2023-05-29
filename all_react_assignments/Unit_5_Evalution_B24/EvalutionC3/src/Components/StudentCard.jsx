export const StudentCard = ({ Poster, batch, green_card, name, student_code, score}) => {
  return (
    <div className={"student-card"}>
      {/* Show student details here with a button to view details */}
<img className="student-image" src={Poster} alt="" />
<h2 className="student-name">{name}</h2>
<h4 className="student-batch">{batch}</h4>
<h3 className="student-green-card">{green_card}</h3>
<button className="student-detail">View Details</button>
    </div>
  );
};
