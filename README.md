# OneSchedule

[OneSchedule](https://npnkhoi.github.io/oneschedule) is a course-schedule visualizer for Fulbright Univesrity Vietnam. Its main features are:
- Visualizing course schedules (with color theme)
- Presenting course offerings (with filters and table/gallery views)

Our goal is to reduce time spent for course selection at the beginning of each semester to 30 minutes per student.

## Getting started

Install [NodeJS](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/docs/install), then run the following command to install all dependencies:
```
yarn
```
Then, host the app in your machine by running:
```
yarn start
```

## Technical design
### Technologies
We use React (JavaScript), Redux and Bootstrap 5.
### Project structure
```
.
├── App.css                          : universal styling
├── App.js                           : master component
├── assets                           : fancy word for "images"
│   ├── Avatar.png                   
│   └── Logo.svg
├── components                       
│   ├── About.css                    : About view
│   ├── About.js                     =
│   ├── Contribute.js                : Contribute view
│   ├── Courses.css                  : Offerings view
│   ├── Courses.js                   =
│   ├── Footer.css                   : Footer
│   ├── Footer.js                    =
│   ├── Main.css                     : The container of 
│   ├── Main.js                      ...  main content
│   ├── NavBar.css                   : Navigation bar
│   ├── NavBar.js                    =
│   ├── OneCourse.css                : View of a single course
│   ├── OneCourse.js                 =
│   ├── Schedule                     : Schedule view
│   │   ├── Calendar.css             : overriding styles
│   │   ├── Calendar.js              : Calendar component (fullcalendar.io)
│   │   ├── index.css                
│   │   ├── index.js                 : Main script
│   │   ├── Searcher.js              : Search bar 
│   │   └── SelectedCourses.js       : Info pane for selected courses
│   └── utils                        : Reusable components
│       ├── CTA.js                   : CTA button
│       └── index.css                 
├── data
│   ├── colors.json                  : Color themes
│   ├── courses.json                 : Appropriate json format of courses' data
│   └── SP21_CourseList_CourseSchedule.csv : Registrar's generousity
├── hooks                            : Custom React Hooks
│   └── index.js
├── index.js                        
├── reportWebVitals.js
├── scripts                          : Python to transform course data from CSV to appropriate JSON
│   ├── courses.json
│   └── csv_to_json.py
├── store                            : Redux store
│   ├── colorMapSlice.js             : Slice for color mapping
│   ├── courseSlice.js               : Slice for course data
│   └── index.js
└── utils                            : Extremely important helpers
    ├── colors.js
    ├── course.js                   
    └── localStorage.js
```
