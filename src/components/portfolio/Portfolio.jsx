import React from 'react'
import './Portfolio.css' 
import IMG1 from'../../assets/optimized.png'
import IMG2 from'../../assets/share.png'
import IMG3 from'../../assets/simplywall.png'
import IMG4 from'../../assets/waze.png'
import IMG5 from'../../assets/dkarts.png'
import IMG6 from'../../assets/rexaco.png'
import IMG7 from'../../assets/vip.png'
import IMG8 from'../../assets/pushpay.png'
import IMG9 from'../../assets/caratlane.png'
import IMG10 from'../../assets/heatherridgepet.png'
import IMG11 from'../../assets/rottencitypizza.png'
import IMG12 from'../../assets/doodleblue.png'
import IMG13 from'../../assets/todaytourism.png'
const data = [
  {
  id: 1,
  image: IMG1,
  title:'Effective digital marketing made easy',
  github: 'https://client.wcti12.com/',
  },
  {
    id: 2,
    image: IMG2,
    title:'Florida Vacations, Travel & Tourism Guide',
    github: 'https://www.visitflorida.com/',
  },
  {
    id: 3,
    image: IMG3,
    title:'Simply Wall',
    github: 'https://simplywall.st/',
  },

  {
    id: 4,
    image: IMG4,
    title:'Driving direction',
    github: 'https://www.waze.com/live-map/',
  },

  {
    id: 5,
    image: IMG5,
    title:'Dkarts24',
    github: 'https://dkarts24.com/',
  },

  {
    id: 6,
    image: IMG6,
    title:'Rexaco',
    github: 'https://www.rexaco.io/',
  },

  {
    id: 7,
    image: IMG7,
    title:'VIP-Voices - AI Recording',
    github: 'https://airecording.io/vip-voices',
  },

  {
    id: 8,
    image: IMG8,
    title:'Your Church Growth Resource Library',
    github: 'https://pushpay.com/resources/',
  },

  {
    id: 9,
    image: IMG9,
    title:'Caratlane',
    github: 'https://www.caratlane.com/',
  },

  {
    id: 10,
    image: IMG10,
    title:'Veterinarian in Sioux Falls',
    github: 'https://www.heatherridgepet.com/',
  },

  {
    id: 11,
    image: IMG11,
    title:'Rotten City Pizza',
    github: 'https://rottencitypizza.com/',
  },

  {
    id: 12,
    image: IMG12,
    title:'Digital Strategy Consulting Company',
    github: 'https://www.doodleblue.com/',
  },

  {
    id: 13,
    image: IMG13,
    title:'Last Minute Hotel Deals',
    github: 'https://www.todaytourism.com/',
  },
 


]
  


function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5> 
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                <img src={image} alt={title} />
                </div>
                <br/>
                <h3 style={{textAlign:'center'}}>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn'>Visit Site</a> 
                </div>
              </article>
            )

        })
      
      }
      </div>

    </section>
  )
}

export default Portfolio
