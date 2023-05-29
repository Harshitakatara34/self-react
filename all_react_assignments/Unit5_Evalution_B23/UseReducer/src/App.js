import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
switch(action.type){
  case "name":
    return {...state,name:action.payload}
  case "gender":
      return {...state,gender:action.payload}
  case "role":
        return {...state,role:action.payload}
  case "maritalStatus":
          return {...state,maritalStatus:action.payload}
  case "reset":
    return initialState;
  default:
    return state
}
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.
  const [state, dispatch] = useReducer(reducer, initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "reset" });
  };

  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form onSubmit={submitHandler} data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input
                type="text"
                name="name"
                              onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })

                }
                placeholder="Name"
                value={state.name}
              />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select
                            onChange={(e) =>
                  dispatch({ type: "gender", payload: e.target.value })
                }
                name="gender"
                placeholder="Gender"
                value={state.gender}
                data-testid="gender-select"
              >
                <option key="Male">Male</option>
                <option key="Female">Female</option>
                <option key="Prefer Not to Say">Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select
               onChange={(e) =>
                dispatch({ type: 'role', payload: e.target.value })
              }
                name="role"
                placeholder="Role"
                value={state.role}
                data-testid="role-select"      
                   >
                <option key="FrontEnd Developer">FrontEnd Developer</option>
                <option key="BackEnd Developer">BackEnd Developer</option>
                <option key="FullStack Developer">FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input
                   name="maritalStatus"
                    placeholder="MaritalStatus"
                   onChange={(e) =>
                    dispatch({ type: 'checkbox', payload: e.target.value })
                  }
                  checked={state.maritalStatus}
                  type="checkbox"
                />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
        {
          submittedData.length > 0 ? (
            <table data-testid="user-container">
              <thead >
                <tr>
                  <th>S.no</th>
                  <th>User</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Marital Status</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((user, index) => {
                  return (
                    <tr key={index}>
                      <UserRow {...user} id={index + 1} />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h2 data-testid="no-user-container">no users found</h2>
          )}
      </div>
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
