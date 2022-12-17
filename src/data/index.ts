import COLORS from './colors.json'
import Fall2022 from './2022-2023 Fall 2022 Term.json'
import Spring2023 from './2022-2023 Spring 2023 Term.json'

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

const courseData: {[key: string]: Course[]} = {Fall2022, Spring2023}
const availableTerms: string[] = ['Fall2022', 'Spring2023']

export {COLORS, courseData, availableTerms}