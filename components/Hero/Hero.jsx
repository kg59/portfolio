import { useSelector } from 'react-redux'
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Component for hero
 * 
 */

export default function Hero() {
  const hero = useSelector(state => state.hero)

  return (
    <div className="hero-box">
      <FontAwesomeIcon icon={hero.icon} className="hero-star" />
      <div className="hero-name">
        <span>{hero.about.name}</span><br />
        {/**Type Animation */}
        <TypeAnimation sequence={
          hero.about.jobs.map((job, index) => {
            return [job, 2000]
          }).flat()
        }
          wrapper="span" cursor={true} repeat={Infinity} />
        <div className="hero-sub">
          {hero.about.sub}
        </div>
      </div>
      <FontAwesomeIcon icon={hero.icon} className="hero-star" />
    </div>
  )
}
