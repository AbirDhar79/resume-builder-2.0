// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";impor
// import Home from "./Pages/Home";
// import DetailsFilling from "./Pages/DetailsFilling";
// import CheckSelectedId from "./Components/CheckSelectedId";
// import AboutUs from "./Pages/AboutUs";
// import MyResumes from "./Pages/MyResumes";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Page Route */}
//         <Route exact path="/" element={<Home />} />

//         {/* Details Filling Page */}
//         <Route
//           exact
//           path="/template/fill-details"
//           element={
//             <CheckSelectedId>
//               <DetailsFilling />
//             </CheckSelectedId>
//           }
//         />

//         {/* My Resumes Page */}
//         <Route exact path="/my/resumes" element={<MyResumes />} />

//         {/* About Us Page */}
//         <Route exact path="/about-us" element={<AboutUs />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Navigator, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage"; // Renamed Home to StartPage
import FormEntry from "./Pages/FormEntry"; // Renamed DetailsFilling to FormEntry
import IdChecker from "./Components/IdChecker"; // Renamed CheckSelectedId to IdChecker
import InfoPage from "./Pages/InfoPage"; // Renamed AboutUs to InfoPage
import ResumeViewer from "./Pages/ResumeViewer"; // Renamed MyResumes to ResumeViewer

// Dummy wrapper component
const RouteContainer = ({ children }) => {
  return <main className="app-routes">{children}</main>;
};

const Core = () => {
  return (
    <Navigator>
      <RouteContainer>
        <Routes>
          {/* Start Page Route */}
          <Route path="/" element={<StartPage />} exact />

          {/* Form Entry Page */}
          <Route
            path="/template/fill-details"
            element={
              <IdChecker>
                <FormEntry />
              </IdChecker>
            }
            exact
          />

          {/* Resume Viewer Page */}
          <Route path="/my/resumes" element={<ResumeViewer />} exact />

          {/* Info Page */}
          <Route path="/about-us" element={<InfoPage />} exact />
        </Routes>
      </RouteContainer>
    </Navigator>
  );
};

export default Core;