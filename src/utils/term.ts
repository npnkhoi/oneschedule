import { availableTerms } from "../data";

export const getTermId = (term: string) => availableTerms.indexOf(term)

export const prettyTerm = (term: string) => {
  const mid = term.search(/\d/)
  const head = term.slice(0, mid)
  const tail = term.slice(mid)
  return head + ', ' + tail
}