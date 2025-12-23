import React from "react";
import { states } from "./data/states";
import { Route, Routes } from "react-router";

// auth pages

import { routes } from "./data/routes";
import { AdminLayout } from "./pages/Dashboard/Admin/AdminLayout";
import { AdminUser } from "./pages/Dashboard/Admin/AdminUser/AdminUser";
import { AuditLog } from "./pages/Dashboard/Admin/AuditLog/AuditLog";
import { RolePermission } from "./pages/Dashboard/Admin/RolePermission/RolePermission";
import { CsoLayout } from "./pages/Dashboard/Cso/CsoLayoutjsx";
import { CsoDashboard } from "./pages/Dashboard/Cso/CsoDashboard/CsoDashboard";
import { RequestHistory } from "./pages/Dashboard/Cso/RequestHistory/RequestHistory";
import AdminLogin from "./pages/Auth/Admin/Login";
import AdminVerifyOtp from "./pages/Auth/Admin/VerifyOpt";
import { AdminAuthPage } from "./pages/Auth/Admin";
import { CsoAuthPage } from "./pages/Auth/Cso";
import CsoLogin from "./pages/Auth/Cso/Login";

export const StateDataContext = React.createContext(null);

const App = () => {
  const [stateData, setStateData] = React.useState(states);
  return (
    <StateDataContext.Provider value={{ stateData, setStateData }}>
      <Routes>
        {/* Auth Routes */}
        <Route path="auth/admin" element={<AdminAuthPage role="ADMIN" />}>
          <Route path={routes.AUTH.ADMIN.login.rel} element={<AdminLogin />} />
          <Route
            path={routes.AUTH.ADMIN.verifyOtp.rel}
            element={<AdminVerifyOtp />}
          />
          <Route path="*" element={<h1>Auth Page Not Found</h1>} />
        </Route>

        <Route path="auth/cso" element={<CsoAuthPage role="CSO" />}>
          <Route path={routes.AUTH.CSO.login.rel} element={<CsoLogin />} />
          <Route path="*" element={<h1>Auth Page Not Found</h1>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path={routes.DASHBOARD.ADMIN.users.rel}
            element={<AdminUser />}
          />
          <Route
            path={routes.DASHBOARD.ADMIN.audit.rel}
            element={<AuditLog />}
          />
          \
          <Route
            path={routes.DASHBOARD.ADMIN.role.rel}
            element={<RolePermission />}
          />
        </Route>
        <Route path="/cso" element={<CsoLayout />}>
          <Route index element={<CsoDashboard />} />
          <Route
            path={routes.DASHBOARD.CSO.request.rel}
            element={<RequestHistory />}
          />
          <Route
            path={routes.DASHBOARD.ADMIN.audit.rel}
            element={<AuditLog />}
          />
          \
          <Route
            path={routes.DASHBOARD.ADMIN.role.rel}
            element={<RolePermission />}
          />
        </Route>

        {/* CRM Routes */}
        {/* <Route path={routes.DASHBOARD.CRM.base} element={<CrmLayout />}>
          <Route path="contacts" element={<CrmContacts />} />
          <Route path="deals" element={<CrmDeals />} />
          <Route path="*" element={<h1>CRM Page Not Found</h1>} />
        </Route>

        
        <Route path={routes.DASHBOARD.CSO.base} element={<CsoLayout />}>
          <Route path="tasks" element={<CsoTasks />} />
          <Route path="dashboard" element={<CsoDashboard />} />
          <Route path="reports" element={<CsoReports />} />
          <Route path="*" element={<h1>CSO Page Not Found</h1>} />
        </Route>
        
        <Route path={routes.DASHBOARD.BSM.base} element={<BsmLayout />}>
          <Route path="projects" element={<BsmProjects />} />
          <Route path="teams" element={<BsmTeams />} />
          <Route path="overview" element={<BsmOverview />} />
          <Route path="*" element={<h1>BSM Page Not Found</h1>} />
        </Route>{" "}
        */}

        {/* General 404 */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </StateDataContext.Provider>
  );
};

export default App;
