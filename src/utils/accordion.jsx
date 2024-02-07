import { HiShieldCheck } from "react-icons/hi";
import { GiArchiveRegister, GiTakeMyMoney } from "react-icons/gi";
import { MdLeaderboard, MdEventAvailable } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "@mui/material";

const data = [
  {
    icon: <FaQuestionCircle />,
    heading: "What is Horizon BVP?",
    detail:
      "Horizon BVP is a vibrant society at BVCOE. We provide a platform for students to engage in insightful debates, showcase their talents through open mic events, and participate in a variety of activities aimed at fostering a global perspective.",
  },
  {
    icon: <GiArchiveRegister />,
    heading: "How can we join Horizon BVP?",
    detail:
      "Joining Horizon BVP is simple! Fill our Membership Form released every semester. Join our support group to find details on the application process, membership requirements, and any upcoming recruitment events or orientation sessions.",
  },
  {
    icon: <MdEventAvailable />,
    heading: "What events does Horizon organize?",
    detail: `We organize a diverse array of events, including stimulating MUN debates, engaging open mic nights, and various other activities that promote diplomacy, public speaking, and cultural exchange. Check out our Events Page for upcoming schedules and details.`,
  },
  {
    icon: <GiTakeMyMoney />,
    heading: "Are there any membership fees?",
    detail:
      "Horizon BVP offers membership without any fees. We believe in providing an inclusive environment for all students passionate about international affairs and public speaking.",
  },
  {
    icon: <PiStudentFill />,
    heading: "Can non-students join Horizon BVP?",
    detail:
      "While our primary focus is on students, we appreciate the enthusiasm of non-students. Contact us for special opportunities or collaborations.",
  },
  {
    icon: <MdLeaderboard />,
    heading: "Leadership roles within Horizon BVP?",
    detail:
      "We encourage active participation! If you're interested in taking on leadership roles, stay tuned for announcements regarding leadership opportunities, or express your interest during our annual elections.",
  },
];
export default data;
