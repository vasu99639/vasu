import { Link } from "react-router-dom";
import './css/Literary.css';
export function Literary() {

    return(
        <div className="liteary">
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
                    <option value="">Resume Writing Contest</option> 
                    <option value=""> Content writing</option> 
                    <option value=""> Creative Story writing contest</option>
                    <option value=""> Poetry Writing</option> 
                    <option value="">Quiz Contests</option> 
                  </select> 
              </Link>
              </button>
              </li>
            </ul>
        </nav>
    </div>
    <h1><font size="8" color="black">Gates Literary  club</font></h1>
    <p><font align="center" size="6"> literary club is  one of the best platform to the students to develop theit creativity skills,communicationskills,Boosts the confidence,instill Reading Habits , Awareness Campaigns,word of the day,Graphic Novel etc..in this club the students are very active and interested to join and test their skills by biting the number of paticipants</font></p>

    <h2><font size="7" color="brown"> litetary club</font></h2>
    <ul><font color="blue" size="6">
        <li>Content  Team</li>
        <li> Creativity Team</li>
        <li></li>
        
        <section id="contact Us">
            <h3><font align="center">Contact Us</font></h3>
            <div><font align="center">Email:  LitetaryClub@gates it.ac.in</font></div>
            <div><font align="center">Password: Gates@123</font></div>
          </section>
          </font></ul>
          <Link to='/'>Club</Link>
          </div>
    )
}




        