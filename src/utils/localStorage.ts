// load string from localStarage and convert into an Object
// invalid output must be undefined
export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// convert object to string and store in localStorage
export function saveToLocalStorage(state: Record<string, unknown>) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load personal plans from localStorage 
export function loadPersonalPlansFromLocalStorage() {
  try {
    const plansJSON = localStorage.getItem("personalPlans");
    if (plansJSON === null) return []; // no plans yet

    const plans = JSON.parse(plansJSON);

    if (!Array.isArray(plans)) { // validate 
      console.warn("Plans in localStorage is not an array");
      return [];
    }

    return plans; // returns a list of plans which has format: [{id: string, creidts: number, title: string, description: str, url: str, instructor: str, location: str, etc}]
  }
  catch (error) {
    console.warn("Error loading personal plans from localStorage: ", error);
    return []; 
  }
}