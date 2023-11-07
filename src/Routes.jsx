import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AdminPanelOne = React.lazy(() => import("pages/AdminPanelOne"));
const SettingTermsCondition = React.lazy(() =>
  import("pages/SettingTermsCondition"),
);
const SettingPrivacyPolicy = React.lazy(() =>
  import("pages/SettingPrivacyPolicy"),
);
const SettingEditProfile = React.lazy(() => import("pages/SettingEditProfile"));
const SettingProfile = React.lazy(() => import("pages/SettingProfile"));
const SupportHelp = React.lazy(() => import("pages/SupportHelp"));
const AllCars = React.lazy(() => import("pages/AllCars"));
const MyMember = React.lazy(() => import("pages/MyMember"));
const AdminPanel = React.lazy(() => import("pages/AdminPanel"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/mymember" element={<MyMember />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route path="/supporthelp" element={<SupportHelp />} />
          <Route path="/settingprofile" element={<SettingProfile />} />
          <Route path="/settingeditprofile" element={<SettingEditProfile />} />
          <Route
            path="/settingprivacypolicy"
            element={<SettingPrivacyPolicy />}
          />
          <Route
            path="/settingtermscondition"
            element={<SettingTermsCondition />}
          />
          <Route path="/adminpanelone" element={<AdminPanelOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
