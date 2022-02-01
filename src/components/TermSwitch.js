import { useDispatch, useSelector } from 'react-redux'
import { backward, forward } from '../store/termSlice'
import { selectTerm } from '../store/selectors'
import { getTermId, prettyTerm } from '../utils/term'
import { availableTerms } from '../data'
import './TermSwitch.scss'

const TermSwitch = () => {
  const term = useSelector(selectTerm)
  const termId = getTermId(term)
  const dispatch = useDispatch()

  const isFirst = termId == 0
  const isLast = termId == availableTerms.length - 1
  

  return (
    <div className="d-flex flex-row align-items-center text-light border border-light rounded">
      <button className='btn btn-dark'
        disabled={isFirst}
        onClick={() => dispatch(backward())}
      >
        <i className='fas fa-angle-left '/>
      </button>

      <span className='flex-grow-1 text-center mx-3'> {prettyTerm(term)}</span>

      <button className='btn btn-dark'
        disabled={isLast}
        onClick={() => dispatch(forward())}
      >
        <i className='fas fa-angle-right '/>
      </button>
    </div>
  )
}

export default TermSwitch