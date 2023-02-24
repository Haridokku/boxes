const Box = (props) => {
  const { className, name } = props;
  return (
    <div className={`box ${className}`}>
      <h1 className="text">{name}</h1>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="title">Boxes</h1>
    <div className="boxContainer">
      <Box className="box1" name="Small" />
      <Box className="box2" name="Medium" />
      <Box className="box3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
