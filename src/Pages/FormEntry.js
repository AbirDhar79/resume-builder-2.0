// import React, { useState } from "react";
// import {
//   Navbar,
//   DetailFillingSidebar,
//   EducationComponent,
//   KeySkillsComponent,
//   PersonalInfoComponent,
//   PreviewComponent,
//   WorkExperienceComponent,
// } from ".";
// import "./Styles/DetailsFilling.css";

// // As soon as details are filled for particular categories/sections browser moves further to next fields if ! then same field on same page

// const DetailsFilling = (props) => {
//   const [tab, setTab] = useState(0);

//   return (
//     <div className="details-filling">
//       <Navbar active={""} />
//       {tab === 4 ? null : (
//         <div className="details-filling-cont">
//           <DetailFillingSidebar tab={tab} setTab={setTab} />
//           {tab === 0 ? (
//             <PersonalInfoComponent setTab={setTab} tab={tab} />
//           ) : null}
//           {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
//           {tab === 1 ? (
//             <WorkExperienceComponent setTab={setTab} tab={tab} />
//           ) : null}
//           {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
//         </div>
//       )}
//       {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
//     </div>
//   );
// };

// export default DetailsFilling;
import React, { useState } from "react";
import {
  Navbar,
  DetailFillingSidebar,
  EducationComponent,
  KeySkillsComponent,
  PersonalInfoComponent,
  PreviewComponent,
  WorkExperienceComponent,
} from "."; // Fixed path to use Pages/index.js
import "./Styles/DetailsFilling.css"; // Fixed relative path

const FormSection = ({ children }) => {
  return <section className="form-content">{children}</section>;
};

const FormEntry = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {activeTab === 4 ? null : (
        <FormSection>
          <div className="details-filling-cont">
            <DetailFillingSidebar tab={activeTab} setTab={setActiveTab} />
            {activeTab === 0 ? (
              <PersonalInfoComponent setTab={setActiveTab} tab={activeTab} />
            ) : null}
            {activeTab === 3 ? (
              <KeySkillsComponent setTab={setActiveTab} tab={activeTab} />
            ) : null}
            {activeTab === 1 ? (
              <WorkExperienceComponent setTab={setActiveTab} tab={activeTab} />
            ) : null}
            {activeTab === 2 ? (
              <EducationComponent setTab={setActiveTab} tab={activeTab} />
            ) : null}
          </div>
        </FormSection>
      )}
      {activeTab === 4 ? (
        <PreviewComponent setTab={setActiveTab} tab={activeTab} />
      ) : null}
    </div>
  );
};

export default FormEntry;