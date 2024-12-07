import StudentDashboard from "@/dashboards/roles/Student/Student.jsx";
import StudentAchievementDashboard from '@/dashboards/roles/Student/Student.jsx';
import StudentAchievementSubmission from '@/dashboards/roles/Student/StudentAchievementSubmission.jsx';
import StudentProfileGeneration from '@/dashboards/roles/Student/StudentProfile.jsx';
import RegisterEvents from "../roles/Student/RegisterEvents";
import MyEvents from "../roles/Student/MyEvents";
const StudentRoutes = [
  {
    index: true,  // This makes it the default route
    element: <StudentDashboard />,
  },
  {
    path: 'submit',
    element: <StudentAchievementSubmission />,
  },
  {
    path: 'profile',
    element: <StudentProfileGeneration />,
  },
  {
    path: 'events/register',
    element: <RegisterEvents />,
  },
  {
    path: 'events/my-events',
    element: <MyEvents />,
  }
];

export default StudentRoutes;