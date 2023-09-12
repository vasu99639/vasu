
import { Link } from "react-router-dom";
import './css/Euphoria.css';
export function Euphoria() {
    return(
        <div className="euphoria">
            <div className="hi">
        <nav>
          
      <ul className="new"> 
              <li><button><Link href="#home">Home</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#about">About</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <li><button><Link to='/contact'><Link href='/contact'>Contact</Link></Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/login'>login</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/registration'>registration</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#Activites">Activities</Link>
                <select name="" id="">(Select one) 
                    <option value="">Photo Graphy</option> 
                    <option value="">Womens day special Event</option> 
                    <option value="">Mehendi Desiging competitions</option>
                    <option value="">Rangoli competition </option> 
                    <option value="">Kite Flying Competition</option> 
                  </select> 
              </button>
              </li>
            </ul>
        </nav>
    </div>
    <h1><font size="8" color="black">Gates Euphoria Club</font></h1>
<p> <font size="5">Constitution of the GATES EUPHORIA CLUB: The Cultural Committee actively coordinates and participates in several prominent competitions like Singing, Dancing, Mehendi, Rangoli, Drawing. Euphoria Club Nurturing the unconventional talents & skills of youth that instills confidence & stimulates the economy. Injecting a sense of leadership and decision making power in the young Stars</font></p>
    <h2><font size="7" color="brown"> Euphoria club</font></h2>
    <ul><font color="blue" size="6">
        <li>solo performances</li>
        <li> Group Performances</li></font>
        
        <section id="contactUs">
            <h3>Contact Us</h3>
            <div><font color="green">Email:  EuphorialClub@gatesit.ac.in</font></div>
            <div><font color="green">Password: Gates@123</font></div>
          </section>
          </ul>
          <Link to='/'>Club</Link>
          <Link to='/'>Club</Link>
        </div>
    )
}