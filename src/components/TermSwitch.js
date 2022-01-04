import { useDispatch, useSelector } from 'react-redux'
import { backward, forward } from '../store/termSlice'
import { selectTerm } from '../store/selectors'
import { getTermId, prettyTerm } from '../utils/term'
import { availableTerms } from '../data'

const TermSwitch = () => {
  const term = useSelector(selectTerm)
  const termId = getTermId(term)
  const dispatch = useDispatch()

  const isFirst = termId == 0
  const isLast = termId == availableTerms.length - 1
  

  return (
    <h1 className="display-6 d-flex flex-row align-items-center mb-3">
      <button className={`${isFirst ? 'text-muted' : ''} btn btn-outline-primary`}
        onClick={() => dispatch(backward())}
      >
        <i className='fas fa-angle-left '/>
      </button>

      <span className='flex-grow-1 px-3'> {prettyTerm(term)}</span>

      <button className={`${isLast ? 'text-muted' : ''} btn btn-outline-primary`}
        onClick={() => dispatch(forward())}
      >
        <i className='fas fa-angle-right '/>
      </button>
    </h1>
  )
}

export default TermSwitch