import React from 'react';
import { render, screen } from "@testing-library/react"
import OneCourse from "./OneCourse"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from '../../store'
import { getCourse } from '../../utils/course';

it('render one course', () => {
  const courseId = 'ARTS101_Fall2022_S01'
  const course = getCourse(courseId)

  render(
    <Provider store={store} >
      <OneCourse courseId={courseId} />
    </Provider>
  )

  screen.getAllByText(courseId) // course ID must exist
  screen.getAllByText(course.title) // course title must exist
  screen.getAllByText('Add') // Add button must exist
})