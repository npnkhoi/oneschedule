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
    <div className="o-title term-switcher d-flex flex-row align-items-center mb-2">
      <button className={`${isFirst ? 'text-muted' : 'gray-hover'} btn o-title`}
        onClick={() => dispatch(backward())}
      >
        <i className='fas fa-angle-left '/>
      </button>
      <span className='flex-grow-1' > {prettyTerm(term)}</span>
      <button className={`${isLast ? 'text-muted' : ''} btn o-title gray-hover`}
        onClick={() => dispatch(forward())}
      >
        <i className='fas fa-angle-right '/>
      </button>
    </div>
  )
}

export default TermSwitch