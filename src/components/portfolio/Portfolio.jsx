import React, { useState, useEffect } from 'react';
import stock from './stockLand.png';
import astro from './astroscope.png';
import parthub from './parthub.png';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import { projects, homeworks } from '../../data';
const Portfolio = () => {

    const [selected, setSelected] = useState('projects')
    const [data, setData] = useState([])

    const portfolioFilter = [
        {
            id: 'projects',
            title: 'Projects', 
        },
        {
            id: 'homeworks',
            title: 'Homeworks',
        },
        {
            id: 'personal',
            title: 'Personal',
        },
    ]

    useEffect(() => {

        switch(selected) {
            case 'projects':
                setData(projects)
                break
                
            case 'homeworks':
                setData(homeworks)
                break
                default:
                setData(projects)
        
        }

    }, [selected])

    return (

        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
               {portfolioFilter.map(item => (
                   <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id ={item.id}/>
               ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                    <img src={d.img} className='pic1'/>
                    <h3 >{d.title}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}

export default Portfolio
