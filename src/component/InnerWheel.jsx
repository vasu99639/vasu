import { Link } from "react-router-dom";
import './css/InnerWheel.css';
export function InnerWheel() {

    return(
        <div className="innerwheel"> 
          <div className="hi">
        <nav>
          
      <ul className="new"> 
              <li><button><Link href="#home">Home</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#about">About</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <li><button><Link to='/contact'><Link href='/contact'>Contact</Link></Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/login'>login</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/registration'>registration</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#Activites">Activities
                <select name="" id="">(Select one) 
                    <option value="">campaigning </option> 
                    <option value=""> blood donation</option> 
                    <option value="">donating money to orphans</option>
                    <option value="">creating awareness in rural areas</option> 
                    <option value="">creating awareness in farmers about organic farming</option> 
                  </select> 
              </Link>
              </button>
              </li>
            </ul>
        </nav>
    </div>
    <h1><font size="8" color="black">Gates Inner Wheel club</font></h1>
    <p><font size="5">The main motto of inner wheel club is Friendship and service.in their communities and beyond that<br/>Instill in us o'Lord the true meaning of friendship.<br/>Never let us forget that we are all thy children.<br/>Not withstanding the difference in our cultures&creeds<br/>Endow us with a desire to serve our fellow men.<br/>Remembering that we too offen need help<br/>Whenever or wherever the need for service arises.<br/>Help us to be ready to serve.<br/>Endeavouring to make our bage of inner wheel worthwhile.<br/>Ensuring that we have not<br/>Lived in vain.</font></p>
    <h2><font size="7" color="brown"> Innerwheel</font></h2>
    <ul><font color="blue" size="6">
        <li>servicing  Team</li>
        <li>Awareness Team</li>
        
        <section id="contactUs">
            <h3><font color="black">Contact Us</font></h3>
            <div><font color="black">Email:  InnerWheelClub@gatesit.ac.in</font></div>
            <div><font color="black">Password: Gates@123</font></div>
          </section>
          </font></ul>
          <Link to='/'>Club</Link>
          </div>
    )
} 
        