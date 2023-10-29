import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className=" container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>React.js</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>View.js</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Next.js</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>MUI</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>

        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Express.JS</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>MongoDB</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>SQL</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Python</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>

        </div>
      </div>
    
    </div>

    <br/>
    <div className=" container experience__container">
      <div className="experience__frontend">
        <h3>Mobile Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Java/Kotlin</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>React-Native</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Swift</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Object-c</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>

        </div>
      </div>

      <div className="experience__backend">
        <h3>Blockchain Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>NFT</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>ERC20 & ERC21</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>Smart Contract</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <div>
            <h4>OpenSea storefront and API integration</h4>
            <small className= 'text-light'>Experienced </small>
            </div>
          </article>

        </div>
      </div>
    
    </div>
    </section>
  )
}

export default Experience