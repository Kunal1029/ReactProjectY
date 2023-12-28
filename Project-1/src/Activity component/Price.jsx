/* eslint-disable react/prop-types */
function Price({ oldPr, newPr }) {
  let oldsty = { textDecorationLine: "line-through" };
  let newsty = { fontWeight: "bold" };
  let bgc = { backgroundColor: "yellow",
   height: "40px",
   borderBottomLeftRadius: "14px",
   borderBottomRightRadius: "14px",
 };
  return (
    <>
      <div style={bgc}>
        <span style={oldsty}>{oldPr}</span>
        &nbsp; &nbsp;&nbsp;
        <span style={newsty}>{newPr}</span>
      </div>
    </>
  );
}

export default Price;
