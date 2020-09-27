import React from "react";

const LogButton = props => {
  let { isLogged } = props;
  return isLogged ? <button>Log</button> : <button>Edit</button>;
};
export default LogButton;