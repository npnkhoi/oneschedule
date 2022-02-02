import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contributor = ({ contributor }) => {
    return (
        <div className='m-3 text-center'>
            <div className='cont-img rounded-circle overflow-hidden width'>
                <img className='w-100' src={contributor.avatar_url} />
            </div>
            <a
                href={contributor.html_url}
                className='fw-bold'
            >
                {contributor.login}
            </a >
            <div>{contributor.contributions} commit(s)</div>
        </div>
    )
}

const Contributors = () => {
    const [contributors, setContributors] = useState()

    useEffect(() => {
        axios.get('https://api.github.com/repos/npnkhoi/oneschedule/contributors')
            .then((res) => {
                setContributors(res.data)
            })
    }, [])

    if (contributors) {
        return (
            <div className='d-flex flex-row flex-wrap'>
                {contributors
                    .filter(contributor => contributor.login !== 'pazabol')
                    .map((contributor) => (
                        <Contributor contributor={contributor} key={contributor.login} />
                    ))}

            </div>
        )
    } else {
        return (<div>Loading ...</div>)
    }
}

export default Contributors