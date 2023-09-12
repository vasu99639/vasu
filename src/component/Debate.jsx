import { Link } from "react-router-dom"
import './css/Debate.css';
export function Debate() {
    return(
        <div className="debate">
         <div className="hi">
        <nav>
          
      <ul className="new"> 
              <li><button><Link href="#home">Home</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#about">About</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <li><button><Link to='/contact' href='/contact'>Contact</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/login'>login</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/registration'>registration</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <li><button><Link href="#Activites">Activities</Link>
                <select name="" id="">(Select one) 
                    <option value="">impact on social media</option> 
                    <option value=""> Artificial Intelligents</option> 
                    <option value="">Child Labour</option>
                    <option value="">impact on video games</option> 
                    <option value="">Bootstrapping The World Of Debating</option> 
                  </select> 
              </button>
              </li>
            </ul>
        </nav>
    </div>
    <h1><font size="8" color="black">Gates Debate club</font></h1>
    <p> <font size="5">Debate club consists of two teams.each team consisting of two active speakers .each team has two to three constructive speeches, and two to three rebuttal speeches.The affirmative must advocate everything required by the topic itself.<br/>no revision of position of team is permitted during the debate. Each speak is questioned as soon as he concludes his constructive speech.the witness must answer the questions without consulting his colleagues.</font></p>
    <h2><font size="7" color="brown"> Debate club</font></h2>
    <ul><font color="blue" size="6">
        <li>Red Team</li>
        <li>Black Team</li>
        


        <section id="conactUs">
            <h3><font color="black">Contact Us</font></h3>
            <div><font color="black">Email:  DebateClub@gatesit.ac.in</font></div>
            <div><font color="black">Password:Gates@123</font></div>
          </section> 
          </font></ul> 
          <Link to='/'>Club</Link>
        </div>
    )
}