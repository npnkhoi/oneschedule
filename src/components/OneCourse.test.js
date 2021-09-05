import React from 'react';
import { render } from "@testing-library/react"
import OneCourse from "./OneCourse"
import "@testing-library/jest-dom/extend-expect"
import { Provider } from 'react-redux';
import store from '../store'

test('foo', () => {
  const course = {
    id: 'MAJOR101_Fall2021',
    title: 'Testing',
    instructor: '',
    schedule: [],
    credits: '4',
    description: 'N/A'
  }


  const component = render(
    <Provider store={store} >
      <OneCourse course={course} />
    </Provider>
  )
  expect(component.container).toHaveTextContent(
    course.title
  )
})