import { getLevel, getMajor, getSchedule } from "./course"

describe('course utils', () => {
  // TODO: Test the course file (exist, have enough fields)

  const COURSES = [
    {id: 'CS101_Spring2022_S01', major: 'CS', level: '100'},
    {id: 'ARTS321_Spring2022', major: 'ARTS', level: '300'},
    {id: 'ENG201_Fall9999_S02', major: 'ENG', level: '200'},
  ]

  it('get major', () => {
    COURSES.forEach((course) => {
      expect(getMajor(course.id) === course.major)
    })
  })

  it('get level', () => {
    COURSES.forEach((course) => {
      expect(getLevel(course.id) === course.level)
    })  
  })

  it('get schedule', () => {
    const course = {
      title: "Introduction to Visual Studies",
      id: "ARTS101_Fall2022_S01",
      credits: "4",
      instructor: "Tram Luong",
      url: "https://onestop.fulbright.edu.vn/s/course-offering/a046F00002TF5drQAD/arts101fall2022s01",
      description: "Faculty: Tram Luong - E: tram.luong@fulbright.edu.vn\nCategory: Exploratory - Arts & Humanities (E1)\nPre-requisite: No\n* This course serves as a prerequisite for most intermediate and advanced Art and Media Studies courses.\n---\nCourse Description:\nImages function as both a practical artistic medium (in advertisements for example) but also as something to be aesthetically enjoyed. They can also serve as a medium for social change as images can spread awareness about important issues and, in the digital age, reach huge numbers of people regardless of the language they speak. To better understand how images function, this course introduces students from a variety of backgrounds and interests to interdisciplinary approaches to visual studies, culture, and theory. We will learn how to analyze, evaluate, and interpret images across multiple cultural realms, including art and popular media, public and political space, advertising and commerce, and cinematic and virtual worlds. \nStudents will develop a sound foundation in relevant theories such as the gaze, agency, semiology, the exhibitionary order, and spectatorship. Throughout the course, we will also consider how visual technologies have been crucial to the construction and representation of diverse subjectivities, and how they have intersected with broader economic, political, and cultural developments such as colonialism and globalization. Topics will be organized through three interrelated and mutually constitutive thematic units: Technologies of Vision; Spaces of Vision/Envisioning Space; and Global Visual Culture. Each unit will be concluded through a project taking creative and critical visual and/or textual form. \n---\nLearning Objectives:\nUpon completion of this course, students will be able to:\nanalyze a variety of visual mediums through a critical lens\nformulate arguments employing relevant theories in order to discuss visual texts\ncompose essays that use appropriate vocabulary to interpret and historicize visual texts\n---\nSample Topic Schedule\nTECHNOLOGIES OF VISION\n1. The Power of Images: Why study the visual?\n2. Signification and Value\n3. Vision/Perspective/Realism\n4. Technologies of Vision and Reproduction\n5. Visual Essay Presentations\nSPACES OF VISION/ENVISIONING SPACE\n6. Spaces of Identity: The Social Construction of the Self\n7. Surveillance, Spectacle, and Resistance\n8. Spaces of Identity: Colonialism and Nationalism\n9. Institutional Spaces: Collection and Exhibition\nGLOBAL VISUAL CULTURES\n10. Spaces of Identity: Postcolonialism and Diaspora\n11. Media and Mass Culture\n12. Digital Visualities and Virtual Bodies\n13. Contemporary Globalization\n14. Paper consultations\n---\nAssessments and Grading:\nPARTICIPATION (Attendance, online engagement in required forums and discussions, in-class participation in discussions, feedback sessions, informal presentations, etc.): 15%\nTECHNOLOGIES OF VISION - Visual Essay Group Project: 25%\nSPACES OF VISION/ENVISIONING SPACE - Spatial Analysis Essay (1000-1250 words): 25%\nGLOBAL VISUAL CULTURES - Research Project (2000-2250 words): 35%",
      categories: [
          "E1"
      ],
      schedule: [
          {
              day: "Wednesday",
              start_time: "12:00:00",
              end_time: "14:00:00"
          }
      ],
      "location": "Classroom 1"
  }

    const scheduleText = 'Wednesday 12:00:00 - 14:00:00'

    expect(getSchedule(course)).toBe(scheduleText)
  })
})