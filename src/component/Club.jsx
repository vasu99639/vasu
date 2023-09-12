import { Link } from "react-router-dom";
import"./css/Club.css";
export function Club() {
    return(
        <div className="club">
            <div>
        <img src="https://back.mm.bing.net/th?id=OIP.l96yJc0MoIGSqFBd_KBmBAHaBE&pid=Api&P=0&h=180" width="1500px" height="100px"/>
     </div>
     <h1>Gates Club Activities</h1>
    <Link href="https://www.google.com/S" target="blank">google</Link>
    <div className="img" id="d1">
    <img src= {require("../asets/Campus_Activities_Horizontal_1280x489-removebg-preview.png")}
     title="just a logo" width="300" height="180"/>
    <img src={require("../asets/line-various-books-7300546-removebg-preview.png")}
     title="just a logo" width="180" height="180"/>
    </div>
    <div className="nav-bar">
            <h3>Teams</h3>
              <ul>
            <link rel="stylesheet" href="camp.jsx"/>
              <Link to='/camp'><img src={require("../asets/club_1.png")} className="link-button"  width="100"height="100"/></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/debate'><img src={require("../asets/club_3.png")} className="link-button"  width="100"height="100"/></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/euphoria'><img src= {require("../asets/club_4.png")}className="link-button"  width="100"height="100"/></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/literary'><img src={require("../asets/club_5.png")} className="link-button"  width="100"height="100"/></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/innerwheel'><img src={require("../asets/club_6.png")} className="link-button"  width="100"height="100"/></Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/speaking'>  <img src= {require("../asets/club_2.png")}className="link-button"  width="100"height="100"/></Link>
              </ul>
            </div>
      </div>
        )
        }