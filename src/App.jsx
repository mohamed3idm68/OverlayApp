import { useState } from "react";
import "./App.css";

function App() {
  const [showWindow, setShowWindow] = useState(false);


  const handelButtonClick = () => {
    setShowWindow(true)
  }

  const handelCloseClick = () => {
    setShowWindow(false)
  }

  const handelSubmit = (e) => {
     e.preventDefault()
  }

  return <>
        <button className="btn btn-primary" onClick={handelButtonClick}>show window</button>
        {showWindow && <div className="content">
          <div className="content-dev">
              <form  onSubmit={handelSubmit}>
                 <input type="text" placeholder="userName" required/>
                 <input type="password" placeholder="password" required/>
                 <button className="btn btn-secondary" type="submit">submit</button>
                 <label>sign in or <span>you have an accout?</span></label>
                 <button className="btn btn-danger" onClick={handelCloseClick}>Close window</button>

              </form>
            

          </div>
               
          </div>}
  
  </>;
}

export default App;
