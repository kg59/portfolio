import { useState } from 'react';
import { useSelector } from 'react-redux'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Component for hero
 * 
 * Fetch details from heroReducer and use TypeAnimation
 * Todo: improve create icons
 */

function createIcons(icon) {
  return (
    <div className="hidden md:table-cell flex-row">
      <div><FontAwesomeIcon icon={icon} className="hero-star" size="6x" /></div>
    </div>
  )
}

export default function Hero() {
  const hero = useSelector(state => state.hero)
  const [fontStyle, setFontStyle] = useState(hero.defaultStyles.font);

  return (
    <div className="hero-box">
      {createIcons(hero.icon)}
      <div className="hero-name">
        <div className="hero-title">
          <span>{hero.about.name}</span>
          <br />
          A &nbsp;
          <span style={{
            fontFamily: fontStyle
          }}>
            {/** Animation speed 2 sec docs - https://react-type-animation.netlify.app/examples */}
            <TypeAnimation
              preRenderFirstString={true}
              sequence={
                hero.about.jobs.map((job, index) => {
                  if (job.styles != undefined) {
                    return [() => setFontStyle(job.styles.font), job.title, 2000, '']
                  } else {
                    return [() => setFontStyle(hero.defaultStyles.font), job.title, 2000, '']
                  }
                }).flat()
              }
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </div>
        <div className="hero-sub">
          {hero.about.sub}
        </div>
      </div>
      {createIcons(hero.icon)}
    </div>
  )
}
