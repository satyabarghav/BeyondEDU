import StudentDashboard from "@/dashboards/roles/Student/Student.jsx";
import StudentAchievementDashboard from '@/dashboards/roles/Student/Student.jsx';
import StudentAchievementSubmission from '@/dashboards/roles/Student/StudentAchievementSubmission.jsx';
import StudentProfileGeneration from '@/dashboards/roles/Student/StudentProfile.jsx';

const StudentRoutes = [
  {
    index: true,  // This makes it the default route
    element: <StudentAchievementDashboard />,
  },
  {
    path: 'submit',
    element: <StudentAchievementSubmission />,
  },
  {
    path: 'profile',
    element: <StudentProfileGeneration />,
  },
];

export default StudentRoutes;