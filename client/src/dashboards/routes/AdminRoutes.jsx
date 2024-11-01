import AdminDashboard from "@/dashboards/roles/Admin/Admin.jsx";
import AdminAchievementManagement from '@/dashboards/roles/Admin/AdminAchievementManagement.jsx';
import AdminParticipationTracking from '@/dashboards/roles/Admin/AdminParticipationTracking.jsx';
import AdminReportAnalytics from '@/dashboards/roles/Admin/AdminReportsAnalytics.jsx';
import AdminUserManagement from '@/dashboards/roles/Admin/AdminUserManagement.jsx';
import AdminEventManagement from '@/dashboards/roles/Admin/AdminEventManagement.jsx'
const AdminRoutes = [
  {
    index: true, // This makes it the default route
    element: <AdminDashboard />,
  },
  {
    path: 'achievements',  // Remove the /admin prefix
    element: <AdminAchievementManagement />,
  },
  {
    path: 'participation',
    element: <AdminParticipationTracking />,
  },
  {
    path: 'reports',
    element: <AdminReportAnalytics />,
  },
  {
    path: 'users',
    element: <AdminUserManagement />,
  },
  {
    path: 'events',
    element: <AdminEventManagement/>
  }
];

export default AdminRoutes;