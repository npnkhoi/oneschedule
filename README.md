# OneSchedule

**We are actively looking for developers from Fulbright to maintain & develop new features to address student's need. Email phuong.pham.210120@student.fulbright.edu.vn if you are interested!**

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
We use React (JavaScript), Redux and Bootstrap 5. There is no backend and offerings data is stored directly in the browsers.

## Schedule Update Guide
Before the registration period of every semester, we regularly update the schedule data on our website. This is the core maintenance activity keeping the app alive.

Prerequisite: 
- Ask us (@lanphgphm) to be a collaborator of this repo.
- Clone and set up https://github.com/npnkhoi/fuv-scrapper (following the README there).

Follow the steps:
1. Scrape the schedule using `fuv-scrapper`. It usually takes 30 minutes. You will get a file with name like `2022-2023 Spring 2023 Term.json`. 
2. Make sure the schedule file is correct: no missing schedules, manual courses -- like PE -- were added, etc. VSCode's `Format Document` command may help format the JSON.
3. Copy the schedule file from `fuv-scrapper` repo into `src/data` here.
4. Update the timestamp in `src/utils/config.ts` (named `config.last_updated`).
5. Host the app locally to make sure the new schedule and timestamp are correctly shown.
6. Add, commit, and push to GitHub. The code will be automtically deployed, which can be observed in [Github Actions](https://github.com/npnkhoi/oneschedule/actions).
7. A few minutes after the deployment, make sure that the [official website](https://npnkhoi.github.io/oneschedule/#/) is updated.
