import React from "react";

const Info = () => {
  return (
    <>
      <div className="products-heading">
        <h2>How would you like us to contact you?</h2>
        <p>
          <button type="button" className="btn" width="100px">
            <a href="/success">Email</a>
          </button>

          <button type="button" className="btn" width="100px">
            <a href="/success">Text</a>
          </button>
          <button type="button" className="btn" width="100px">
            <a href="/success">Phone</a>
          </button>
        </p>
      </div>
    </>
  );
};

export default Info;
