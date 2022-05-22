import { Todo } from "./components/Todo";
import './App.css';
import React from "react";

function App() {
  const [isUser, setUser] = React.useState(false);
  const isError = false;
  const isLoading = false;
  const handleLogin =() => {
    setUser(true);
  };

  // if(!isUser){
  //   return(
  //     <div style={{ textAlign: "center",margin: "10px"}}>
  //       User is Not Logged in, Please
  //       <button onClick={handleLogin}>LOGIN</button>
  //     </div>
  //   );
  // }
  return !isUser?(
    <div style={{ textAlign: "center",margin: "10px"}}>
      User is Not Logged in, Please
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  ):isLoading ?(
    <div>...loading</div>
  ): isError ?(
    <div> something went wrong</div>
  ):(
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
