import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const [searchparams]=useSearchParams()
  const product=useSelector((state)=>state.studentReducer.students)
  const dispatch=useDispatch()
const loaction=useLocation()

let obj={
  params:{
    batch:searchparams.getAll("batch"),
    _limit:10,
    _page:searchparams.get("page")

  }
}
  useEffect(()=>{
    dispatch(getStudent(obj))
  },[loaction.search])
  return (
    <div>
      <div data-testid="student-list">
        {/* Map through the student list using StudentCard component  */}
        {product.length>0&&product.map((el)=>{
          return <StudentCard key={el.id} {...el}/>
        })}
      </div>
    </div>
  );
};
