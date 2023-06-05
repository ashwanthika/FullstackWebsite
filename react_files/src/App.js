import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PreloginHeader from './prelogin/PreloginHeader';
import PreloginFooter  from "./prelogin/PreloginFooter";
import PreloginSidebar from "./components/sidebar";
import ReadManager from "./buildingManager/ReadManager";
import UpdateManager from "./buildingManager/UpdateManager";
import DeleteManager from "./buildingManager/DeleteManager";
import ManagerReportGeneration from "./buildingManager/ManagerReport";
import CreateManager from "./buildingManager/CreateManager";
import Login from "./prelogin/login";
import HelloBuildingManager from "./buildingManager/HelloBuildingManager"
import BuildingManagerDashboard from "./buildingManager/BuildingManagerDashboard";
import UpdateDeleteVisitor from "./buildingManager/UpdateDeleteVisitor";
import Register from "./prelogin/Register";
import Aboutus from "./prelogin/Aboutus"
import ContactUs from "./prelogin/contact"
import Home from "./prelogin/Home";
import Services from "./prelogin/Services";
import ForgotPassword from "./prelogin/ForgotPassword";
import PostHome from "./components/PostHome"
import PostAboutus from "./components/PostAboutus"
import PostServices from "./components/PostServices"
import PostContactUs from "./components/postcontact"

import GardenTimings from "./gardenManager/gardenTimings";
import ReadResident from "./gardenManager/ReadResident";
import UpdateResident from "./gardenManager/UpdateResident";
import DeleteResident from "./gardenManager/DeleteResident";
import CreateResident from "./gardenManager/CreateResident";
import ReadVisitor from "./gardenManager/ReadVisitor";
import UpdateVisitor from "./gardenManager/UpdateVisitor";
import DeleteVisitor from "./gardenManager/DeleteVisitor";
import CreateVisitor from "./gardenManager/CreateVisitor";
import Resident_dashboard from "./resident/Resident_dashboard"
import Resident_poolsubscription from "./resident/Resident_poolsubscription"
import Resident_profilesettings from "./resident/Resident_profilesettings"
import Resident_registervehicle from "./resident/Resident_registervehicle"
import Resident_tennissubscription from "./resident/Resident_tennissubscription"
import Chatwithme from "./components/popchat"
import VisitorDashboard from "./visitor/VisitorDashboard"
import VisitorProfile from "./visitor/VisitorProfile"
import VisitorRequest from "./visitor/VisitorRequest";
import AvailableUnit from "./visitor/AvailableUnit";
import RentedUnit from "./visitor/RentedUnit";
import VisitorSidebar from "./visitor/VisitorSidebar"
import Timings from "./visitor/Timings";
import Chatwithmevisitor from "./visitor/Visitorchat";
import Dashboard from "./prelogin/Dashboard";
import Residentchatwithme from "./resident/residentpopchat";
import ReportResident from "./gardenManager/reportResident";
import ReportVisitor from "./gardenManager/reportVisitor";

import HelloResident from "./gardenManager/HelloResident"
import HelloVisitor from "./gardenManager/HelloVisitor"
/* SecurityManager */
import CreateWatchman from './securitymanager/CreateWatchman';
import DeleteWatchman from './securitymanager/DeleteWatchman';
import ReadWatchman from './securitymanager/ReadWatchman';
import ReportWatchman from './securitymanager/reportWatchman';
import SecurityManagerDashboard from './securitymanager/SecurityManagerDashboard';
import SecurityManagerManaging from './securitymanager/SecurityManagerManaging';
import UpdateWatchman from './securitymanager/UpdateWatchman';
import Profilesettings_manager from './components/Profilesettings_Manager';
import Profilesettings_visitor from './visitor/Profilesettings_Visitor';
import PoolTimings from "./poolManager/poolTimings";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
         <Route path="/home"element={<Home />} />

        <Route path="/Chatwithmevisitor"element={<Chatwithmevisitor />} />
        <Route path="/Residentchatwithme"element={<Residentchatwithme />} />
        
        
        <Route path="/Timings"element={<Timings />} />
        <Route path="/rentedunit"element={<RentedUnit />} />
        <Route path="/availableunit"element={<AvailableUnit />} />
        <Route path="/SecurityDashboard"element={<SecurityManagerDashboard />} />
        

        <Route path="/Posthome"element={<PostHome />} />
        <Route path="/PostAboutus"element={<PostAboutus />} />
        <Route path="/Postcontact"element={<PostContactUs />} />
        <Route path="/Postservices"element={<PostServices />} />
        <Route path="/about"element={<Aboutus />} />
        <Route path="/services"element={<Services />} />
          <Route path="/contact"element={<ContactUs />} />
          <Route path="/register"element={<Register />} />
          <Route path="/contact"element={<ContactUs />} />
          <Route path="/forgotpassword"element={<ForgotPassword />} />
          <Route path="/contact"element={<ContactUs />} />
          <Route path="/login"element={<Login />} />
          <Route path="/services"element={<Services />} />
          <Route path="/HelloBuildingManager"element={<HelloBuildingManager />} />
          <Route path = "/BuildingManagerDashboard"element={<BuildingManagerDashboard/>}/>
          <Route path="/Dashboard" element={< Dashboard/>}/> 
          <Route path="/Chatwithme" element={<Chatwithme/>}/>
          <Route path="/CreateManager"element={<CreateManager />} />
          <Route path="/UpdateManager"element={<UpdateManager />} />
          <Route path="/DeleteManager"element={<DeleteManager />} />
          <Route path="/ReadManager"element={<ReadManager />} />
          <Route path="/ReportManager"element={<ManagerReportGeneration />} />

          <Route  path="/VisitorProfile" element={<Profilesettings_visitor />}/>
<Route path="/VisitorDashboard" element={<VisitorDashboard />}/>
<Route  path="/UpdateDeleteVisitor" element={<UpdateDeleteVisitor />}/>


          <Route path="/helloResident"element={<HelloResident />} />
          <Route exact path="/GardenTimings"element={<GardenTimings />}/>
          <Route path="/PoolTimings"element={<PoolTimings />} />
          <Route path="/ResidentDashboard"element={<Resident_dashboard />} />
          <Route path="/PoolSubscription"element={<Resident_poolsubscription />} />
          <Route path="/Resident_Profilesettingspage"element={<Resident_profilesettings />} />
          <Route path="/Manager_Profilesettingspage" element={<Profilesettings_manager/>}/>
          <Route path="/Resident_registervehicle"element={<Resident_registervehicle />} />
          <Route path="/TennisSubscription"element={<Resident_tennissubscription />} />

          <Route path="/CreateResident"element={<CreateResident />} />
          <Route path="/ReadResident"element={<ReadResident />} />
          <Route path="/DeleteResident"element={<DeleteResident />} />
          <Route path="/UpdateResident"element={<UpdateResident />} />
          <Route path="/ReportResident"element={<ReportResident/>} />
          
          <Route path="/helloVisitor"element={<HelloVisitor />} />
          <Route path="/CreateVisitor"element={<CreateVisitor />} />
          <Route path="/ReadVisitor"element={<ReadVisitor />} />
          <Route path="/DeleteVisitor"element={<DeleteVisitor />} />
          <Route path="/UpdateVisitor"element={<UpdateVisitor />} />
          <Route path="/ReportVisitor"element={<ReportVisitor/>} /> 
                  {/* Security Manager */}
        <Route exact path="/CreateWatchman" element={<CreateWatchman />} />
        <Route exact path="/DeleteWatchman" element={<DeleteWatchman />} />
        <Route exact path="/ReadResident" element={<ReadResident />} />
        <Route exact path="/ReadVisitor" element={<ReadVisitor />} />
        <Route exact path="/ReadWatchman" element={<ReadWatchman />} />
        <Route exact path="/ReportWatchman" element={<ReportWatchman />} />
        <Route exact path="/SecurityManagerDashboard" element={<SecurityManagerDashboard />} />
        <Route exact path="/SecurityManagerManaging" element={<SecurityManagerManaging />} />
        <Route exact path="/UpdateWatchman" element={<UpdateWatchman />} />
          

      </Routes>
    </BrowserRouter>

  );
    
}

export default App;


    // <div className="App">
      {/* <ForgotPassword></ForgotPassword> */}
      {/* <Services></Services> */}
      {/* <Aboutus></Aboutus> */}
      {/* <Home></Home> */}
      {/* <Register></Register> */}
      {/* <UpdateDeleteVisitor></UpdateDeleteVisitor> */}
      {/* <HelloBuildingManager></HelloBuildingManager> */}
      {/* <BuildingManagerDashboard></BuildingManagerDashboard> */}
      {/* <ManagerReportGeneration></ManagerReportGeneration> */}
      {/* <Login></Login> */}
      {/* <CreateManager></CreateManager> */}
      {/* <UpdateManager></UpdateManager> */}
      {/* <ReadManager></ReadManager> */}
      {/* <DeleteManager></DeleteManager> */}
        {/* <ContactUs></ContactUs> */}
     {/* </div> */}

    // <HeaderFooter/>
    // <Aboutus/>
    // <ContactUs/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
