import COLORS from './colors.json'
import Spring2023 from './2022-2023 Spring 2023 Term.json'
import Summer2023 from './2022-2023 Summer Term.json'
import Fall2023 from './2023-2024 Fall 2023 Term.json'

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

const courseData: {[key: string]: Course[]} = {Summer2023, Fall2023}
const availableTerms: string[] = ['Summer2023', 'Fall2023']

export {COLORS, courseData, availableTerms}
