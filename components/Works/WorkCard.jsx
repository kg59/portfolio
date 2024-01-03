import Image from 'next/image'
import presets from './default-presets.json'

const setImageClass = (cardbig,imagemob) => {
    if (imagemob) {
        return "work-image-mob"
    }

    if (cardbig) {
        return "work-image work-image-big"
    } else {
        return "work-image"
    }
}

const setCardClass = (cardbig,cardmobile) => {
    if (cardbig) {
        return "work-card-big"
    } else if (cardmobile) {
        return "work-card-small work-mobile"
    } else {
        return "work-card-small"
    }
}

const setImage = (imagesrc,imagemob) => {
    if(imagesrc != undefined) {
        return imagesrc
    } else if (imagemob) {
        return "/default-mob.png"
    } else {
        return "/default.png"
    }
}

const setPreset = (imagepreset, imagemob) => {
    if(imagepreset != undefined) {
        return imagepreset
    } else if (imagemob) {
        return presets.workMob
    } else {
        return presets.work
    }
}

export default function WorkCard({cardbig,cardmobile,cardcolor,imagepreset,imagesrc, imagemob}) {
  const preset = setPreset(imagepreset,imagemob)
  return (
    <div className={setCardClass(cardbig,cardmobile)} style={{backgroundColor: cardcolor? cardcolor : "skyblue"}}>
        <span className="work-name">Portfolio</span>
        <span className="work-description">Just some stuff</span>
        <Image className={setImageClass(cardbig,imagemob)} src={setImage(imagesrc,imagemob)} 
        width={preset.modifiers.width} 
        height={preset.modifiers.height}/>
    </div>
  )
}
