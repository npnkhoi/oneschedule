import React from 'react';
import { render, screen } from "@testing-library/react"
import OneCourse from "./OneCourse"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from '../../store'
import { getCourse } from '../../utils/course';
import { availableTerms, courseData } from '../../data';

it.skip('render one course', () => {
  const courseId = courseData[availableTerms[0]][0].id
  const course = getCourse(courseId)

  // TODO: how to mock the url in Jest?
  render(
    <Provider store={store} >
      <OneCourse  />
    </Provider>
  )

  screen.getAllByText(courseId) // course ID must exist
  screen.getAllByText(course.title) // course title must exist
  screen.getAllByText('Add') // Add button must exist
})