import TeacherDashboard from "@/dashboards/roles/Teacher/TeacherDashboard.jsx";
import TeacherAchievementReview from '@/dashboards/roles/Teacher/TeacherAchievementReview.jsx';
import TeacherReportsAndFeedback from '@/dashboards/roles/Teacher/TeacherReport.jsx';
import TeacherEventManagement from "../roles/Teacher/TeacherEventManagement";
import path from "path";
const TeacherRoutes = [
  {
    index: true,  // This makes it the default route
    element: <TeacherDashboard />,
  },
  {
    path: 'review',
    element: <TeacherAchievementReview />,
  },
  {
    path: 'reports',
    element: <TeacherReportsAndFeedback />,
  },
  {
    path: 'events',
    element: <TeacherEventManagement />,
  }

];

export default TeacherRoutes;