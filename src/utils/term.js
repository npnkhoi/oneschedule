import { availableTerms } from "../data";

export const getTermId = (term) => availableTerms.indexOf(term)

export const prettyTerm = (term) => {
  const mid = term.search(/\d/)
  const head = term.slice(0, mid)
  const tail = term.slice(mid)
  return head + ', ' + tail
}