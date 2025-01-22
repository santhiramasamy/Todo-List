import styled from "styled-components";
let paraStyle = {
  backgroundColor: "green",
  color: "white",
  fontSize: "20px",
  padding: "10px",

  boxShadow: "5px 5px 20px black",
};

let Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
`;

// extending the properties from Button
let NewButton = styled(Button)`
  background-color: red;
`;

const Content = () => {
  function displayClick(e) {
    console.log(e.target); // shows the button element
    console.log(e.target.innerText);

    console.log("Click Me!");
  }

  function display2(user) {
    console.log(user);
  }

  function displayClick2(event) {
    console.log(event.target);
    console.log("Click Me!");
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        Welcome To React JS Learning
      </h1>
      <p style={paraStyle}>
        We are going to learn about react.js in one complete tutorial
      </p>
      {/* adding onClick (event listener) */}
      <Button onClick={displayClick}>Click Me</Button>
      <NewButton
        onClick={() => {
          display2("Shanthi");
        }}
      >
        Duplicate
      </NewButton>
      <Button
        onClick={(e) => {
          displayClick2(e);
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default Content;
