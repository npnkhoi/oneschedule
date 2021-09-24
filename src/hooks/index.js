import {useState, useEffect} from 'react'

function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

// function useClickOutside(handler) {
//   let domNode = useRef();
  
//   useEffect(() => {
//     let clickHandler = (event) => {
//       if (domNode.current && !domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", clickHandler);

//     return () => {
//       document.removeEventListener("mousedown", clickHandler);
//     };
//   });

//   return domNode;
// }

export {
  usePersistedState,
  // useClickOutside
}