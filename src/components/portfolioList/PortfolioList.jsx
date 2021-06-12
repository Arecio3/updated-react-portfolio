import React from 'react'
import './portfolioList.scss'

const PortfolioList = ({link, id, title, active, setSelected }) => {
    return (
        <a href={link} className={active ? 'portfolioList active' : 'portfolioList'} onClick={() => setSelected(id)}>
            {title}
        </a>
    )
}

export default PortfolioList
