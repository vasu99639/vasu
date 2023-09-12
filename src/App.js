 import './App.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Euphoria } from './component/Euphoria';
import {Camp }  from './component/Camp';
import { Club } from './component/Club';
import { Debate } from './component/Debate';
import {Speaking} from './component/Speaking';
import{InnerWheel} from './component/InnerWheel';
import{Literary} from './component/Literary';
import{Login} from './component/Login';
import { Contact } from './component/Contact';
import { Registration } from './component/Registration';
import CreateStudentComponent from './CreateStudentComponent';
// import FooterStudentComponent from './FooterStudentComponent';
// import HeaderStudentComponent from './HeaderStudentComponent';
import ListStudentComponent from './ListStudentComponent';
import UpdateStudentComponent from './UpdateStudentComponent';
import ViewStudentComponent from './ViewStudentComponent';

 function App() {
  return (
        <div className="App">
        {/* <Club/> */}
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />

            <Route path='/Camp' element={<Camp/>}/>
            <Route path='/' element={<Club/>}/>
            <Route path='/Debate' element={<Debate/>}/>
            <Route path='/euphoria' element={<Euphoria/>}/>
            <Route path='/literary' element={<Literary/>}/>
            <Route path='/innerwheel' element={<InnerWheel/>}/>
            <Route path='/speaking' element={<Speaking/>}/>
            <Route path='/create' element={<CreateStudentComponent/>}/>
            {/* <Route path='/footer' element={<FooterStudentComponent/>}/> */}
            {/* <Route path='/header' element={<HeaderStudentComponent/>}/> */}
            <Route path='/list' element={<ListStudentComponent/>}/>
            <Route path='/update' element={<UpdateStudentComponent/>}/>
            <Route path='/view' element={<ViewStudentComponent/>}/>
          </Routes>
      {/* <Club/>
      <Euphoria></Euphoria>
      <Camp></Camp>
      <Debate></Debate>
      <Speaking></Speaking>
      <InnerWheel></InnerWheel>
      <Literary></Literary>
      <Login></Login>
      <Contact></Contact> */}
      {/* <CreateStudentComponent></CreateStudentComponent> */}
      {/* <FooterStudentComponent></FooterStudentComponent> */}
      {/* <HeaderStudentComponent></HeaderStudentComponent> */}
      {/* <ListStudentComponent></ListStudentComponent>
      <UpdateStudentComponent></UpdateStudentComponent>
      <ViewStudentComponent></ViewStudentComponent> */}

  {/* <Registration></Registration> */}
      
    </div>
   

);
}
  


export default App;

