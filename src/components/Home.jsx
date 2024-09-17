import { useState } from "react";
import { Link } from "react-router-dom";






function Home() {
  const [showWindow, setShowWindow] = useState(false);

  const handelButtonClick = () => {
    setShowWindow(true);
  };

  const handelCloseClick = () => {
    setShowWindow(false);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>

      <button className="btn btn-primary" onClick={handelButtonClick}>
        Sign in
      </button>
      {showWindow && (
        <div className="content">
          <div className="content-dev">
            <form onSubmit={handelSubmit}>
              <input type="text" placeholder="userName" required />
              <input type="password" placeholder="password" required />
              <button className="btn btn-secondary" type="submit">
                submit
              </button>
              <label>
                sign in or <Link to="/AddNew">you have an accout?</Link>
              </label>
              <button className="btn btn-danger" onClick={handelCloseClick}>
                Close window
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
