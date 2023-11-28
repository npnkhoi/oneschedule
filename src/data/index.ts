import COLORS from './colors.json'
import Fall2023 from './2023-2024 Fall 2023 Term.json'
import Spring2024 from './2023-2024 Spring 2024 Term.json'

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

const courseData: {[key: string]: Course[]} = {Fall2023, Spring2024}
const availableTerms: string[] = ['Fall2023', 'Spring2024']

export {COLORS, courseData, availableTerms}
