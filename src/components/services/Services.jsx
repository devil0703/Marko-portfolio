import React from 'react'
import './Services.css'
import {BiCheck, BiLocationPlus, BiCalendar, BiBuildings, BiListUl} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>My last</h5>
        <h2>Work Experience</h2>
        <div className="container services__container">
        <article className="service">
        <div className="service__head">
        <h3>Senior Software Engineer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Spiria<br/>
          <BiLocationPlus className='service__list-icon' />   Montréal, Canada<br/>
          <BiCalendar className='service__list-icon'/>   <small>2022.8-Present</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Collaborate with cross-functional teams to gather and refine project requirements, and work closely with front-end developers and designers to ensure seamless user experiences.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Design, develop, and maintain complex web applications, ensuring seamless integration of front-end and back-end components.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Validated code for proper structuring, security and compatibility with different browsers, devices or operating systems.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Conduct rigorous testing, debugging, and troubleshooting to identify and resolve issues.</small><br/><br/>
          </li>
        </ul>
        </article>
        <article className="service">
        <div className="service__head">
        <h3>Blockchain Developer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Techugo<br/>
          <BiLocationPlus className='service__list-icon' />   Ontario, Canada<br/>
          <BiCalendar className='service__list-icon'/>   <small>2020.4-2022.6</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Collaborated with engineering team to review application requirements, plan implementation details and estimate delivery timelines.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Built stable and secure systems to translate dense technical topics to stakeholders less versed with blockchain applications.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Architected, developed and deployed decentralized applications to provide permission access to data at smart contract and protocol levels.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Implemented, tested and audited open-source software to interact with on-chain smart contracts.</small>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h3>Junior Software Engineer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Royal Bank of Canada<br/>
          <BiLocationPlus className='service__list-icon' />   Toronto, Canada<br/>
          <BiCalendar className='service__list-icon'/>   <small>2019.8-2020.3</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Coordinated efficient large-scale software deployments.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Collaborated with fellow engineers to evaluate software and hardware interfaces.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Analyzed code defects and failures and presented code refactors and design fixes.</small><br/><br/><br/>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h3>Full Stack Developer</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Webb of Sweden<br/>
          <BiLocationPlus className='service__list-icon' />   Malmö,  Sweden<br/>
          <BiCalendar className='service__list-icon'/>   <small>2015.10-2018.11</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Reviewed code, debugged problems, and corrected issues.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Analyzed existing software implementations to identify areas requiring improvement.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Developed functional databases, applications and servers to support websites on back-end.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Worked with back-end developers to design APIs.</small><br/><br/><br/><br/>
          </li>
        </ul>
        </article>

        <article className="service">
        <div className="service__head">
        <h3>Full Stack Developer Intern</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiBuildings  className='service__list-icon'/>   Synergo Group<br/>
          <BiLocationPlus className='service__list-icon' />   Stockholm,  Sweden<br/>
          <BiCalendar className='service__list-icon'/>   <small>2012.4-2017.3</small><br/>
          </li>
          <li>
          <BiCheck className='service__list-icon'/> <small>Developed, coded, modified and debugged application programs of varying degree of complexity with full independence.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Wrote production-ready code with fluency in modern front-end and back-end frameworks.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Assisted with creating cross-platform UI web components and built 3 responsive applications using front-end frameworks.</small><br/>
          <BiCheck className='service__list-icon'/> <small>Developed user-friendly web forms with validation and error handling.</small>
          </li>
        </ul>
        </article>

        
        </div>

    </section>
  )
}

export default Services