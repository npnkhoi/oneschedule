import COLORS from './colors.json'
import Fall2022 from './2022-2023 Fall 2022 Term.json'

export interface Course {
    title: string;
    id: string;
    credits: string | null;
    instructor: string;
    url: string;
    description: string;
    categories: string[];
    schedule: {
        day: string;
        start_time: string;
        end_time: string;
    }[];
    location?: string;
}

const courseData: {[key: string]: Array<Course>} = {Fall2022}
const availableTerms = ['Fall2022']

export {COLORS, courseData, availableTerms}