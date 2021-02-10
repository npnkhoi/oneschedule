const courses = [
  {
    "id": "ARTS101_Spring2021_S03",
    "name": "Introduction to Visual Studies (Nhung Walsh)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS102_Spring2021_S02",
    "name": "Introduction to Art History and Theory (Pamela Corey)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS201_Spring2021_S01",
    "name": "Movements in Post-1945 International Cinema (Aaron Anderson)",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS202_Spring2021_S01",
    "name": "Arts of Southeast Asia (Pamela Corey)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS203_Spring2021_S01",
    "name": "Introduction to Modern Art (Pamela Corey)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ARTS205_Spring2021_S01",
    "name": "Art for Social Change: The Curator's Roles in Non-Institutional Exhibition Making (Nhung Walsh)",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "CHI201b_Spring2021_S01",
    "name": "Intermediate Chinese 2 (Yu Hsin Hung)",
    "start_time": "",
    "end_time": "",
    "days": "",
    "type": "Semester",
    "location": ""
  },
  {
    "id": "CORE101_Spring2021_S05",
    "name": "Global Humanities and Social Change (Aaron Anderson)",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "CORE101_Spring2021_S07",
    "name": "Global Humanities and Social Change (Andrew Bellisari)",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "CORE101_Spring2021_S09",
    "name": "Global Humanities and Social Change (Pamela Stacey)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "CORE102_Spring2021_S02",
    "name": "Modern Vietnamese Culture and Society (Nguyen Nam - Vu Minh Hoang - TAs)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Ting Foundation Space"
  },
  {
    "id": "CORE102_Spring2021_S03",
    "name": "Modern Vietnamese Culture and Society (Nguyen Nam - Vu Minh Hoang - TAs)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Ting Foundation Space"
  },
  {
    "id": "CORE103_Spring2021_S02",
    "name": "Quantitative Reasoning for a Digital Age (Sebastian Dziallas)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE103_Spring2021_S04",
    "name": "Quantitative Reasoning for a Digital Age (Linh Tran)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE103_Spring2021_S06",
    "name": "Quantitative Reasoning for a Digital Age (Graeme Walker)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 6&7"
  },
  {
    "id": "CORE104_Spring2021_S02",
    "name": "Scientific Inquiry (Kinho Chan)",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "CORE104_Spring2021_S08",
    "name": "Scientific Inquiry (Jill Siri)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "CORE104_Spring2021_S09",
    "name": "Scientific Inquiry (Samhitha Raj)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "CORE104_Spring2021_S10",
    "name": "Scientific Inquiry (Samhitha Raj)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S04",
    "name": "Design and Systems Thinking (Minh Nguyen)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S06",
    "name": "Design and Systems Thinking (Kien Truong)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CORE105_Spring2021_S07",
    "name": "Design and Systems Thinking (Minh Nguyen)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Maker Space"
  },
  {
    "id": "CS201_Spring2021_S01",
    "name": "Computer Science II: Data Structures (Sebastian Dziallas)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "CS203_Spring2021_S01",
    "name": "Computer Organiztion (Kien Truong)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 8 & 9"
  },
  {
    "id": "CS302_Spring2021_S01",
    "name": "Theory of Computing (Hung Son Nguyen)",
    "start_time": "18:30:00",
    "end_time": "20:00:00",
    "days": "Wednesday, Thursday,",
    "type": "Quarter 3",
    "location": "Online"
  },
  {
    "id": "CS302_Spring2021_S01(1)",
    "name": "Theory of Computing (Hung Son Nguyen)",
    "start_time": "16:30:00",
    "end_time": "19:30:00",
    "days": "Tuesday,",
    "type": "Quarter 3",
    "location": "Online"
  },
  {
    "id": "CS303_Spring2021_S01",
    "name": "Human-Computer Interaction (Sebastian Dziallas)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "ECON101_Spring2021_S01",
    "name": "Principles of Economics 1 (Graeme Walker)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Thursday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "ECON103_Spring2021_S01",
    "name": "Principles of Economics 2 (Hieu Nguyen)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 1"
  },
  {
    "id": "ECON201_Spring2021_S01",
    "name": "Microeconomic Analysis (Graeme Walker)",
    "start_time": "15:00:00",
    "end_time": "16:30:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classroom 1"
  },
  {
    "id": "ECON203_Spring2021_S01",
    "name": "Macroeconomic Analysis (Ben Bingham)",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "ECON301_Spring2021_S01",
    "name": "Economic Development in Sub-Saharan Africa (John Sender)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday, Friday,",
    "type": "Quarter 4",
    "location": "Classroom 4"
  },
  {
    "id": "EL101_Spring2021_S01",
    "name": "Experiential Learning (Vincent Pham)",
    "start_time": "",
    "end_time": "",
    "days": "",
    "type": "Semester",
    "location": ""
  },
  {
    "id": "ENG203_Spring2021_S01",
    "name": "Modern Textiles (David Bruce)",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "ENG205_Spring2021_S01",
    "name": "Integrated Engineering Project (Minh Nguyen)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "ENG206_Spring2021_S01",
    "name": "Introduction to Modelling and Simulation (Kien Truong)",
    "start_time": "",
    "end_time": "",
    "days": "",
    "type": "Semester",
    "location": ""
  },
  {
    "id": "FRE101a_Spring2021_S01",
    "name": "French Beginner 1 (Stephane Thierry)",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "HIS101_Spring2021_S01",
    "name": "Fulbright History Lab & History Dialogues Project (Andrew Bellisari & Jeremy Adelman & TA - Antoine Le)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "HIS106_Spring2021_S01",
    "name": "Modern Europe (Andrew Bellisari)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "HIS108_Spring2021_S01",
    "name": "United States and the World (Vu Minh Hoang)",
    "start_time": "16:45:00",
    "end_time": "18:15:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "HIS204_Spring2021_S01",
    "name": "A History of ASEAN (Vu Minh Hoang)",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "HIS205_Spring2021_S01",
    "name": "From Black Face to Facebook: History of American Popular Culture (Geoffrey Stewart)",
    "start_time": "",
    "end_time": "",
    "days": "",
    "type": "Semester",
    "location": ""
  },
  {
    "id": "IS101_Spring2021_S01",
    "name": "Introductory Biology (Samhitha Raj)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "IS202_Spring2021_S01",
    "name": "Matter (Phan Vu Xuan Hung)",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "IS203_Spring2021_S01",
    "name": "Principles of Neuroscience (Kinho Chan)",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "IS205_Spring2021_S01",
    "name": "Organic Chemistry (Phan Vu Xuan Hung)",
    "start_time": "8:00:00",
    "end_time": "11:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "LIT103_Spring2021_S01",
    "name": "Critical Methods in Literary Studies (Kevin Hart)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "LIT201_Spring2021_S01",
    "name": "Text, Body, Technology: Individuals in Science Fiction (Kevin Hart)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "LIT202_Spring2021_S01",
    "name": "Creative Writing Workshop (Pamela Stacey)",
    "start_time": "15:00:00",
    "end_time": "16:30:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "LIT203_Spring2021_S01",
    "name": "The Laboratory of the Mind: Thought Experiements in Physics, Philosophy, and Literature (Michael Reid)",
    "start_time": "18:30:00",
    "end_time": "20:00:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "LIT204_Spring2021_S01",
    "name": "Identity, Community, and Memory in Vietnamese Diasporic Literature and Film (Isadora Wagner)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Monday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "LIT206_Spring2021_S01",
    "name": "Women and Gender Studies: Representations of Women in Vietnam War Literature and Film (Isadora Wagner)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classrooms 2&3"
  },
  {
    "id": "MATH205_Spring2021_S01",
    "name": "Probability and Statistics (Tran Vinh Linh)",
    "start_time": "13:15:00",
    "end_time": "14:45:00",
    "days": "Wednesday, Friday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "PSY101_Spring2021_S01",
    "name": "Introductory Psychology (Jill Siri)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Art Studio"
  },
  {
    "id": "PSY101_Spring2021_S02",
    "name": "Introductory Psychology (An Nguyen)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "TBD"
  },
  {
    "id": "PSY202_Spring2021_S01",
    "name": "Developmental Psychology (Jill Siri)",
    "start_time": "13:15:00",
    "end_time": "16:15:00",
    "days": "Friday,",
    "type": "Semester",
    "location": "Classroom 5"
  },
  {
    "id": "PSY205_Spring2021_S01",
    "name": "Abnormal Psychology (Chris Rebholz)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Online"
  },
  {
    "id": "SOCI105_Spring2021_S01",
    "name": "Research Methods in Social & Behavioral Science (Co-design) (Kinho Chan)",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Tuesday, Thursday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "SOCI202_Spring2021_S01",
    "name": "Digital Anthropology (Ian Kalman)",
    "start_time": "9:45:00",
    "end_time": "11:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classrooms 8&9"
  },
  {
    "id": "SOCI205_Spring2021_S01",
    "name": "Language, Culture and Thought (Ian Kalman)",
    "start_time": "16:45:00",
    "end_time": "18:15:00",
    "days": "Monday, Wednesday,",
    "type": "Semester",
    "location": "Classroom 4"
  },
  {
    "id": "VS201_Spring2021_S01",
    "name": "Going Hand in Hand: Politics and Economic Development in Contemporary Vietnam (Nguyen Thanh Trung)",
    "start_time": "9:00:00",
    "end_time": "12:00:00",
    "days": "Tuesday,",
    "type": "Semester",
    "location": "Classroom 4"
  }
]

export default courses