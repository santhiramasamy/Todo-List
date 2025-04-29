import styled from "styled-components";
let paraStyle = {
  backgroundColor: "green",
  color: "white",

  padding: "10px",

  boxShadow: "5px 5px 20px black",
};

let buttonStyle = {
  padding: "10px 20px",
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
      <h4 style={{ backgroundColor: "red", color: "white" }}>
        Welcome To React JS Learning
      </h4>
      <p style={paraStyle}>
        We are going to learn about react.js in one complete tutorial
      </p>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "50px"}}>
        {/* adding onClick (event listener) */}
        <Button style={buttonStyle} onClick={displayClick}>
          Click Me
        </Button>
        <NewButton
          style={buttonStyle}
          onClick={() => {
            display2("Shanthi");
          }}
        >
          Duplicate
        </NewButton>
        <Button
          style={buttonStyle}
          onClick={(e) => {
            displayClick2(e);
          }}
        >
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default Content;
