const courses = [
  {
    "id": "ARTS101_Spring2021_S03",
    "course_name": "Introduction to Visual Studies",
    "instructor_name": "Nhung Walsh",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS102_Spring2021_S02",
    "course_name": "Introduction to Art History and Theory",
    "instructor_name": "Pamela Corey",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS201_Spring2021_S01",
    "course_name": "Movements in Post-1945 International Cinema",
    "instructor_name": "Aaron Anderson",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS202_Spring2021_S01",
    "course_name": "Arts of Southeast Asia",
    "instructor_name": "Pamela Corey",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS203_Spring2021_S01",
    "course_name": "Introduction to Modern Art",
    "instructor_name": "Pamela Corey",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS205_Spring2021_S01",
    "course_name": "Art for Social Change: The Curator's Roles in Non-Institutional Exhibition Making",
    "instructor_name": "Nhung Walsh",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "CORE101_Spring2021_S05",
    "course_name": "Global Humanities and Social Change",
    "instructor_name": "Aaron Anderson",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "CORE101_Spring2021_S07",
    "course_name": "Global Humanities and Social Change",
    "instructor_name": "Andrew Bellisari",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "CORE101_Spring2021_S09",
    "course_name": "Global Humanities and Social Change",
    "instructor_name": "Pamela Stacey",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "CORE102_Spring2021_S02",
    "course_name": "Modern Vietnamese Culture and Society",
    "instructor_name": "Nguyen Nam - Vu Minh Hoang - TAs",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Ting Foundation Space"
  },
  {
    "id": "CORE102_Spring2021_S03",
    "course_name": "Modern Vietnamese Culture and Society",
    "instructor_name": "Nguyen Nam - Vu Minh Hoang - TAs",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Ting Foundation Space"
  },
  {
    "id": "CORE103_Spring2021_S02",
    "course_name": "Quantitative Reasoning for a Digital Age",
    "instructor_name": "Sebastian Dziallas",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE103_Spring2021_S04",
    "course_name": "Quantitative Reasoning for a Digital Age",
    "instructor_name": "Linh Tran",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE103_Spring2021_S06",
    "course_name": "Quantitative Reasoning for a Digital Age",
    "instructor_name": "Graeme Walker",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE104_Spring2021_S02",
    "course_name": "Scientific Inquiry",
    "instructor_name": "Kinho Chan",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "CORE104_Spring2021_S08",
    "course_name": "Scientific Inquiry",
    "instructor_name": "Jill Siri",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "CORE104_Spring2021_S09",
    "course_name": "Scientific Inquiry",
    "instructor_name": "Samhitha Raj",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "CORE104_Spring2021_S10",
    "course_name": "Scientific Inquiry",
    "instructor_name": "Samhitha Raj",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S04",
    "course_name": "Design and Systems Thinking",
    "instructor_name": "Minh Nguyen",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S06",
    "course_name": "Design and Systems Thinking",
    "instructor_name": "Kien Truong",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S07",
    "course_name": "Design and Systems Thinking",
    "instructor_name": "Minh Nguyen",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CS201_Spring2021_S01",
    "course_name": "Computer Science II: Data Structures",
    "instructor_name": "Sebastian Dziallas",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "CS203_Spring2021_S01",
    "course_name": "Computer Organiztion",
    "instructor_name": "Kien Truong",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 8 & 9"
  },
  {
    "id": "CS302_Spring2021_S01",
    "course_name": "Theory of Computing (1)",
    "instructor_name": "Hung Son Nguyen",
    "start_time": "18:30:00",
    "end_time": "20:00:00",
    "days": "Wednesday, Thursday,",
    "type": "Quarter 3",
    "location": "Online"
  },
  {
    "id": "CS302_Spring2021_S01_2",
    "course_name": "Theory of Computing (2)",
    "instructor_name": "Hung Son Nguyen",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Tuesday,",
    "type": "Quarter 3",
    "location": "Online"
  },
  {
    "id": "CS303_Spring2021_S01",
    "course_name": "Human-Computer Interaction",
    "instructor_name": "Sebastian Dziallas",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "ECON101_Spring2021_S01",
    "course_name": "Principles of Economics 1",
    "instructor_name": "Graeme Walker",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "ECON103_Spring2021_S01",
    "course_name": "Principles of Economics 2",
    "instructor_name": "Hieu Nguyen",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 1"
  },
  {
    "id": "ECON201_Spring2021_S01",
    "course_name": "Microeconomic Analysis",
    "instructor_name": "Graeme Walker",
    "start_time": "15:00:00",
    "end_time": "16:30:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classroom 1"
  },
  {
    "id": "ECON203_Spring2021_S01",
    "course_name": "Macroeconomic Analysis",
    "instructor_name": "Ben Bingham",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ECON301_Spring2021_S01",
    "course_name": "Economic Development in Sub-Saharan Africa",
    "instructor_name": "John Sender",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday, Friday,",
    "type": "Quarter 4",
    "location": "Classroom 4"
  },
  {
    "id": "ENG203_Spring2021_S01",
    "course_name": "Modern Textiles",
    "instructor_name": "David Bruce",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "ENG205_Spring2021_S01",
    "course_name": "Integrated Engineering Project",
    "instructor_name": "Minh Nguyen",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "FRE101a_Spring2021_S01",
    "course_name": "French Beginner 1",
    "instructor_name": "Stephane Thierry",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "HIS101_Spring2021_S01",
    "course_name": "Fulbright History Lab & History Dialogues Project",
    "instructor_name": "Andrew Bellisari & Jeremy Adelman & TA - Antoine Le",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "HIS106_Spring2021_S01",
    "course_name": "Modern Europe",
    "instructor_name": "Andrew Bellisari",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "HIS108_Spring2021_S01",
    "course_name": "United States and the World",
    "instructor_name": "Vu Minh Hoang",
    "start_time": "16:45:00",
    "end_time": "18:15:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "HIS204_Spring2021_S01",
    "course_name": "A History of ASEAN",
    "instructor_name": "Vu Minh Hoang",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "IS101_Spring2021_S01",
    "course_name": "Introductory Biology",
    "instructor_name": "Samhitha Raj",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "IS202_Spring2021_S01",
    "course_name": "Matter",
    "instructor_name": "Phan Vu Xuan Hung",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "IS203_Spring2021_S01",
    "course_name": "Principles of Neuroscience",
    "instructor_name": "Kinho Chan",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "IS205_Spring2021_S01",
    "course_name": "Organic Chemistry",
    "instructor_name": "Phan Vu Xuan Hung",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "LIT103_Spring2021_S01",
    "course_name": "Critical Methods in Literary Studies",
    "instructor_name": "Kevin Hart",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "LIT201_Spring2021_S01",
    "course_name": "Text, Body, Technology: Individuals in Science Fiction",
    "instructor_name": "Kevin Hart",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "LIT202_Spring2021_S01",
    "course_name": "Creative Writing Workshop",
    "instructor_name": "Pamela Stacey",
    "start_time": "15:00:00",
    "end_time": "16:30:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "LIT203_Spring2021_S01",
    "course_name": "The Laboratory of the Mind: Thought Experiements in Physics, Philosophy, and Literature",
    "instructor_name": "Michael Reid",
    "start_time": "18:30:00",
    "end_time": "20:00:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "LIT204_Spring2021_S01",
    "course_name": "Identity, Community, and Memory in Vietnamese Diasporic Literature and Film",
    "instructor_name": "Isadora Wagner",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "LIT206_Spring2021_S01",
    "course_name": "Women and Gender Studies: Representations of Women in Vietnam War Literature and Film",
    "instructor_name": "Isadora Wagner",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "MATH205_Spring2021_S01",
    "course_name": "Probability and Statistics",
    "instructor_name": "Tran Vinh Linh",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "PSY101_Spring2021_S01",
    "course_name": "Introductory Psychology",
    "instructor_name": "Jill Siri",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "PSY101_Spring2021_S02",
    "course_name": "Introductory Psychology",
    "instructor_name": "An Nguyen",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "TBD"
  },
  {
    "id": "PSY202_Spring2021_S01",
    "course_name": "Developmental Psychology",
    "instructor_name": "Jill Siri",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "PSY205_Spring2021_S01",
    "course_name": "Abnormal Psychology",
    "instructor_name": "Chris Rebholz",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "SOCI105_Spring2021_S01",
    "course_name": "Research Methods in Social & Behavioral Science",
    "instructor_name": "Co-design",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "SOCI202_Spring2021_S01",
    "course_name": "Digital Anthropology",
    "instructor_name": "Ian Kalman",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "SOCI205_Spring2021_S01",
    "course_name": "Language, Culture and Thought",
    "instructor_name": "Ian Kalman",
    "start_time": "16:45:00",
    "end_time": "18:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "VS201_Spring2021_S01",
    "course_name": "Going Hand in Hand: Politics and Economic Development in Contemporary Vietnam",
    "instructor_name": "Nguyen Thanh Trung",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 4"
  }
]

export default courses