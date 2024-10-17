// dashboards/routes/Admin.jsx
import AdminDashboard from '../roles/Admin/Admin.jsx';
import AdminAchievementManagement from '../roles/Admin/AdminAchievementManagement.jsx'; // Example route
import AdminParticipationTracking from '../roles/Admin/AdminParticipationTracking.jsx';
import AdminUserManagement from '../roles/Admin/AdminUserManagement.jsx';
import AdminReportsAnalytics from '../roles/Admin/AdminReportsAnalytics.jsx';
import path from 'path';
const AdminRouter = [
  {
    path: "/admin/home",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/acheivements",
    element: <AdminAchievementManagement />,
  },
  {
    path: "/admin/participation",
    element: <AdminParticipationTracking />,
  },
  {
    path: "/admin/users",
    element: <AdminUserManagement />,
  },
  {
    path: "/admin/reports",
    element: <AdminReportsAnalytics />,
  }
];

export default AdminRouter;
