import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/**
 * Component for hero
 * 
 */

export default function Hero() {
  const hero = useSelector(state => state.hero)

  return (
    <div className="hero-box">
        <FontAwesomeIcon icon={hero.icon} className="hero-star"/>
        <div className="hero-name">
             <span>{hero.about.name}</span>
            <div className="hero-sub">
              {hero.about.sub}
            </div>
        </div>
        <FontAwesomeIcon icon={hero.icon} className="hero-star"/>
    </div>
  )
}
