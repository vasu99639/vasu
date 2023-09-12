import { Link } from "react-router-dom";
import './css/Camp.css';
export function Camp() {
    return(
        <div className="camp">
            <div className="hi">
        <nav>
          
      <ul className="new"> 
              <li><button><Link href="#home">Home</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link href="#about">About</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/contact' href='/contact'>Contact</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/login'>login</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><button><Link to='/registration'>registration</Link></button></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>
        </nav>
    </div>
    <h1><font size="8" color="black">Gates Campus Radio</font></h1>
    <p><font size="5" color="black">Gates campus Radio offers several benifits both strategically and pedagogically  it is a strategic advantage when appealing to new immigrants and international students.<br/> It is a key medium for universities to reach out to and interact with their communities <br/>. It is an excellent tool to improve multimedia class projects Lead City <br/>FM Radio station plays an important role in the student’s academics it not only informs,<br/> but also inspires students to learn more and more.<br/> It not only includes values and virtues, but also creates attitudes, interests and appreciation to their lives. It can cover a very wide area at the same time.<br/> Lead City FM radio fosters the sense of unity and integrity among the students.<br/>
    </font></p>
       
        <h2><font size="7" color="green"> Campus Radio</font></h2>
        <ul><font color="blue" size="6">
            <li>Editing Team</li>
            <li>Audio editing Team</li>
            <li> VideoEditing Team</li>
            <li>RJ Team</li>


            <section id="contactUs">
            <h3>Contact Us</h3>
            <div><font color="green">Email: CampusRadio@gatesit.ac.in </font></div>
            <div><font color="green">Password: Gates@123</font></div>
          </section>
        </font></ul>
       <Link to='/'>Club</Link>
        </div>
    )
}