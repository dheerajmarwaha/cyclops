import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleSwitch({ label, onChange }) {
  const [checked, setChecked] = useState(true);

  const handleChange = (val) => {
    setChecked(val);
    onChange(val);
  };

  return (
    <div className="app" style={{ textAlign: "center" }}>
      {label + " "}
      <ReactSwitch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ToggleSwitch;

// import React from "react";
// import "./ToggleSwitch.css";

// const ToggleSwitch = ({ label }) => {
//   const changeHandler = (e) => {
//     console.log(e.target.value);
//     console.log(e.target.name);
//     if (e.target.value === "on") {
//       console.log("Yes");
//     } else console.log("No");
//     e.preventDefault();
//   };
//   return (
//     <div className="container">
//       {label}{" "}
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="checkbox"
//           name={label}
//           id={label}
//           onChange={changeHandler}
//         />
//         <label className="label" htmlFor={label}>
//           <span className="inner" />
//           <span className="switch" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ToggleSwitch;
