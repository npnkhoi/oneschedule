"""Script to transform course data from csv to appropriate json format"""

# I feel like this script should not be in the same place with the frontend code
# This is for data of Spring Semester, 2021

from pandas import read_csv
import json
from math import isnan


csv_data = read_csv('../data/SP21_CourseList_CourseSchedule.csv')
csv_data.columns = ['term', 'id', 'type', 'title', 'credits', 'instructor', 'status', 'start_date', 'end_date', 'capacity', 'description', 'timeblock', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
columns = csv_data.columns
days = columns[-5:]

json_data = []

def find_occurence(id):
  for i in range(len(json_data)):
    if json_data[i]['id'] == id:
      return i
  return None

for index, course in csv_data.iterrows():
  if not isinstance(course.timeblock, str):
    continue

  # Transform data
  course_schedule = []
  for day in days:
    if course[day]:
      start_time, end_time = course.timeblock.split(' - ')
      course_schedule.append({'day': day, 'start_time': start_time, 'end_time': end_time})

  description_start = course.description.find('Details: ')
  course_description = course.description[description_start + 9:]
  course_notes = course.description[:description_start]

  occurrence = find_occurence(course.id)
  if occurrence is None:
    # First time this course appears    
    json_data.append({
      'id': course.id,
      'type': course.type,
      'title': course.title,
      'credits': course.credits,
      'instructor': course.instructor,
      'start_date': course.start_date,
      'end_date': course.end_date,
      'capacity': course.capacity,
      'description': course_description,
      'notes': course_notes,
      'schedule': course_schedule
      })
  else:
    # Update the existing data of the course
    json_data[occurrence]['schedule'].extend(course_schedule)  

with open('../data/courses.json', 'w+') as file:
  json_object = json.dump(json_data, file, indent=4)  
