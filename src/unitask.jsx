import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
function Unitask() {
  const [addtask, setaddtask] = useState("");
  const [duedate, setduedate] = useState("");
  const [items, setItems] = useState([]);
  const [total,settotal]=useState(0);

  // Function to add task
  function addvalue(e) {
    setaddtask(e.target.value);
  }

  // Function to set date
  function setdate(e) {
    setduedate(e.target.value);
  }
  //to handle submit data after click on sub,mit
  const submit = () => {
    const newItem = {
      id: items.length + 1,
      itemName: addtask,
      itemdate: duedate
      
    };
   

    setItems([...items, newItem]);
    setaddtask("");
    setduedate("");
    settotal(total+1);  
};
// delete item 
  const deleteitem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    settotal(total-1);  
  };

  return (
    <>
    <div className="container d-flex justify-content-between align-items-center">
      <div className="container mt-5 ml-6" style={{ maxWidth: "400px" }}>
        <div className="card p-4" style={{ backgroundColor: "#f2f2f2" }}>
          <h1 className="text-center text-primary">Add Your Task</h1>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Task Details
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Add your item"
              value={addtask}
              onChange={addvalue}
              maxLength={20}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="deadline" className="form-label">
              Deadline
            </label>
            <input
              type="date"
              className="form-control"
              id="deadline"
              value={duedate}
              onChange={setdate}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="container mt-5 ml-6" style={{ maxWidth: "400px" }}>
        <div className="card p-4" style={{ backgroundColor: "#f2f2f2" }}>
        <div  className="d-flex justify-content-between align-items-center"><h2 className="text-center">To Do List</h2> <button className="btn btn-primary ">Pending  <span>{total}</span> </button></div>

          {items.length === 0 ? (
            <p>No items found</p>
          ) : (
            <ul className="list-group">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <p>Task {item.id}</p>
                    <p>{item.itemdate}</p>
                  </div>
                  <span>{item.itemName}</span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteitem(item.id)}
                  >
                     <FaTimes />
                  </button>
                </li>
              ))}
            </ul>   )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Unitask;
