import COLORS from './colors.json'
import Fall2021 from './2021-2022 Fall 2021 Term.json'
import Spring2022 from './2021-2022 Spring 2022 Term.json'
import Summer2022 from './2021-2022 Summer 2022 Term.json'
import Fall2022 from './2022-2023 Fall 2022 Term.json'
import Spring2023 from './2022-2023 Spring 2023 Term.json'
import Summer2023 from './2022-2023 Summer Term.json'
import Fall2023 from './2023-2024 Fall 2023 Term.json'
import Spring2024 from './2023-2024 Spring 2024 Term.json'
import Fall2024 from './2024-2025 Fall 2024 Term.json'
import Spring2025 from './2024-2025 Spring 2025 Term.json'

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

const courseData: {[key: string]: Course[]} = {Fall2021, Spring2022, Summer2022, Fall2022, Spring2023, Summer2023, Fall2023, Spring2024, Fall2024, Spring2025}
const availableTerms: string[] = ['Fall2021', 'Spring2022', 'Summer2022', 'Fall2022', 'Spring2023', 'Summer2023', 'Fall2023', 'Spring2024', 'Fall2024', 'Spring2025']

export {COLORS, courseData, availableTerms}
