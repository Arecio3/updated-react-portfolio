import React, { useState } from 'react'
import stock from './stockLand.png'
import astroscope from './astroscope.png'
import parthub from './parthub.png'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
const Portfolio = () => {

    const [selected, setSelected] = useState('ucfProjects')

    const portfolioFilter = [
        {
            id: 'ucfProjects',
            title: 'UCF Projects', 
        },
        {
            id: 'ucfHomeworks',
            title: 'UCF Homeworks',
        },
        {
            id: 'personal',
            title: 'Personal',
        },
    ]

    return (

        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {portfolioFilter.map(item => (
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id ={item.id}/>
               ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src={stock} alt="Screen shot of StockChasr landing page" className='pic1'/>
                    <h3 >StockChasr</h3>
                </div>
                <div className="item">
                    <img src={astroscope} alt="Screen shot of StockChasr landing page" className='pic1'/>
                    <h3>Astroscope</h3>
                </div>
                <div className="item">
                    <img src={parthub} alt="Screen shot of StockChasr landing page" className='pic1'/>
                    <h3>PartHub</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
