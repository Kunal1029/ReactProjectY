import "./Activity2.css";
import Price from "./Price";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Prod({title , idx , description}) {
    let oldprice = ["1299,9" , "1599,9" ,"1699,9" , "229,9"];
    let newprice = ["299,9" , "599,9" ,"699,9" , "129,9"];
    let discrp = [["DPI 8,000" , "Intuitive surface"] ,[ "designed for iPad pro" , "wireless"] , ["DPI 8,000" , "Intuitive surface"] ,[ "designed for iPad pro" , "wireless"]];

  return (
    <>
      <div className="Act">
        <h1>{title}</h1>
        <p>{discrp[idx][0]}</p>
        <p>{discrp[idx][1]}</p>
        <Price oldPr={oldprice[idx]} newPr={newprice[idx]} />
      </div>
    </>
  );
}

export default Prod;
