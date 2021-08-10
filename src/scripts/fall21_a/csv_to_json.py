"""Script to transform course data from csv to appropriate json format"""

# I feel like this script should not be in the same place with the frontend code
# This is for data of Spring Semester, 2021

from typing import List
from pandas import read_csv
import json
from math import isnan


table = read_csv('AY21-22 Tentative Full-year Course Offerings List_for students.csv')
columns = ['num', 'term', 'area 1', 'area 2', 'area 3', 'level',
       'code', 'title', 'rw_intensive',
    'session_id', 'instructor', 'visiting', 'online', 'blended',
       'classtime']

table.columns = columns

table['id'] = table.apply(lambda x: f'{x.code}_{x.session_id}', 
    axis=1)

# print(table.id)

# days -> classtime

json_data = []

def find_occurence(id: str) -> int or None:
  for i in range(len(json_data)):
    if json_data[i]['id'] == id:
      return i
  return None

def get_schedule(classtime: str) -> List:
  DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  FULL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  def full_day(day: str) -> str:
    if len(day) == 3:
      for i in range(7):
        if DAYS[i] == day:
          return FULL_DAYS[i]
    
    return day

  ret = []
  splitter = classtime.find(' ')
  days = classtime[:splitter]
  hours = classtime[splitter + 1:]

  # Check days
  ok = False
  for day in DAYS:
    if days.find(day) != -1:
      ok = True
  if not ok:
    return ret
  
  days = days.split('&')
  hours = hours.split('-')
  # CAVEAT: Do days need to be in full form?
  for day in days:
    ret.append({
      'day': full_day(day.strip()),
      'start_time': hours[0].strip(),
      'end_time': hours[1].strip(),
    })
  
  return ret

for index, course in table.iterrows():
  # Ignore no-schedule courses (like EL)
  if not isinstance(course.classtime, str):
    continue

  # Transform data
  course_schedule = get_schedule(course.classtime)
  # print(course_schedule)

  # description_start = course.description.find('Details: ')
  # course_description = course.description[description_start + 9:]
  # course_notes = course.description[:description_start]

  occurrence = find_occurence(course.id)
  if occurrence is None:
    # First time this course appears    
    json_data.append({
      'id': course.id,
      'title': course.title,
      'instructor': course.instructor,
      # 'description': course_description,
      # 'notes': course_notes,
      'schedule': course_schedule
      })
  else:
    # Update the existing data of the course
    json_data[occurrence]['schedule'].extend(course_schedule)  

# print(json_data)

with open('courses.json', 'w+') as file:
  json_object = json.dump(json_data, file, indent=4)  
