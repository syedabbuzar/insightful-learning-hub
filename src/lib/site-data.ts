import shahrazImg from "@/assets/faculty-shahraz.jpg";
import riyazImg from "@/assets/faculty-riyaz.jpg";
import sumayyaImg from "@/assets/faculty-sumayya.jpg";
import razaImg from "@/assets/faculty-raza.jpg";
import adiyaImg from "@/assets/faculty-adiya.jpg";

export const faculty = [
  {
    slug: "shahraz",
    name: "Shahraz ul Haq Sir",
    role: "Director • Physics Faculty",
    img: shahrazImg,
    bio: "With over two decades of teaching Physics, Shahraz Sir is the founding director of REZ Academy. His conceptual approach to Mechanics, Electromagnetism, and Modern Physics has helped hundreds of students crack NEET and JEE.",
    expertise: ["NEET Physics", "JEE Physics", "11th-12th Physics", "MHT-CET"],
  },
  {
    slug: "riyaz",
    name: "Riyaz ul Haq Sir",
    role: "Centre Head • Biology Faculty",
    img: riyazImg,
    bio: "Riyaz Sir leads the biology department with a deep love for human physiology, genetics, and ecology. He simplifies the toughest NEET biology chapters with clear diagrams and real-life examples.",
    expertise: ["NEET Biology", "Botany", "Zoology", "Biotechnology"],
  },
  {
    slug: "sumayya",
    name: "Sumayya Fatima",
    role: "Chemistry Faculty",
    img: sumayyaImg,
    bio: "Sumayya Madam covers Physical, Organic, and Inorganic Chemistry with rigorous problem-solving sessions. Her structured notes and weekly tests are loved by every batch.",
    expertise: ["Organic Chemistry", "Physical Chemistry", "NEET", "JEE Mains"],
  },
  {
    slug: "raza",
    name: "Raza ul Haq Sir",
    role: "Mathematics Faculty",
    img: razaImg,
    bio: "Raza Sir teaches Mathematics across 8th to 12th standards with a focus on JEE Advanced level problem-solving. His doubt-clearing sessions are open six days a week.",
    expertise: ["JEE Mathematics", "Calculus", "Algebra", "MHT-CET"],
  },
  {
    slug: "adiya",
    name: "Adiya Fatima",
    role: "English Faculty",
    img: adiyaImg,
    bio: "Adiya Madam handles English Language, Grammar, and Communication. She runs the academy's English Language Development program and personality grooming workshops.",
    expertise: ["Grammar", "Communication", "Writing Skills", "Spoken English"],
  },
];

export const courses = [
  {
    slug: "11-12-science",
    title: "11th & 12th Science",
    tagline: "NEET · JEE · MHT-CET · Board Excellence",
    badge: "Senior Wing",
    summary:
      "Comprehensive coaching for NEET, JEE Mains/Advanced, and MHT-CET with full State Board and CBSE integration.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English"],
    boards: ["Maharashtra State Board", "CBSE", "NEET (UG)", "JEE Mains & Advanced", "MHT-CET"],
    features: [
      "Daily 4–5 hours of structured classes",
      "Weekly chapter-wise tests",
      "Monthly full-syllabus mock tests",
      "Personal mentorship with each faculty",
      "Dedicated doubt-solving sessions",
      "Result-oriented test analysis & reporting",
    ],
    duration: "2 Years (Std XI + XII)",
    batchSize: "30 students max",
  },
  {
    slug: "foundation-5-10",
    title: "Classes 5th to 10th",
    tagline: "Foundation · Concept Building · Board Mastery",
    badge: "Junior Wing",
    summary:
      "Building a rock-solid conceptual base for CBSE and State Board students with early NEET/JEE foundation exposure.",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Foundation Studies"],
    boards: ["Maharashtra State Board", "CBSE", "Olympiads", "Foundation NEET/JEE"],
    features: [
      "Concept-based teaching, never rote learning",
      "Activity-based science learning",
      "Math problem-solving workshops",
      "Handwriting improvement program",
      "Regular parent-teacher meetings",
      "Foundation modules for NEET/JEE",
    ],
    duration: "Yearly batches",
    batchSize: "25 students max",
  },
  {
    slug: "student-support",
    title: "Holistic Student Support",
    tagline: "Beyond Academics · Character · Career",
    badge: "Support Programs",
    summary:
      "Programs designed for the complete personal, intellectual, and ethical development of every student.",
    subjects: ["Language Dev.", "Handwriting", "MindGym", "Islamic Guidance", "Career Discovery"],
    boards: ["All students enrolled in academic programs"],
    features: [
      "English Language Development sessions",
      "Handwriting improvement workshops",
      "Daily Islamic Guidance (optional)",
      "MindGym — cognitive & mental fitness programs",
      "Nutritional guidance for exam-ready students",
      "Career Guidance & Path Discovery counseling",
      "Safe parking facility for parents",
    ],
    duration: "Throughout the year",
    batchSize: "Inclusive for all enrolled",
  },
];

export const branches = [
  {
    id: "bhagya-nagar",
    label: "Branch 01 · Main",
    name: "Bhagya Nagar",
    address: "Bhagya Nagar, Nanded, Maharashtra",
    description:
      "Our flagship campus where REZ Academy was founded in 2003. The Bhagya Nagar centre houses our senior wing, full faculty offices, and the central administrative office.",
    facilities: ["Senior Wing classrooms", "Physics & Chemistry lab access", "Library", "Doubt-solving room", "Administrative office"],
    color: "blue",
  },
  {
    id: "hyder-bagh",
    label: "Branch 02 · New",
    name: "Hyder Bagh",
    address: "Behind Essar Petrol Pump, Hyder Bagh, Nanded",
    description:
      "Our newest state-of-the-art facility opening 15th June. Built to extend REZ Academy's reach to students in the Hyder Bagh and surrounding neighbourhoods.",
    facilities: ["Modern classrooms", "Smart boards", "Library corner", "Parking facility", "Junior & Foundation wings"],
    color: "red",
  },
];

export const stats = [
  { v: "23+", l: "Years of Excellence" },
  { v: "5000+", l: "Students Taught" },
  { v: "5", l: "Expert Faculty" },
  { v: "2", l: "Branches in Nanded" },
];

export const whyChoose = [
  { k: "23", t: "Years of Trusted Service", d: "Serving Nanded since 2003 with unmatched results and credibility." },
  { k: "★", t: "Concept-Based Teaching", d: "We teach to understand and master — not just to memorize." },
  { k: "✓", t: "Personal Attention", d: "Small batches and 1:1 mentoring for every single student." },
  { k: "📈", t: "Regular Tests & Reports", d: "Weekly assessments with detailed progress reports for parents." },
  { k: "🔬", t: "Math & Science Focus", d: "Strong specialization in the subjects that define careers." },
  { k: "❤", t: "Holistic Growth", d: "MindGym, nutritional guidance, Islamic studies and career discovery." },
];