import '../projects/projects.css'
import ProjectCard from '../../components/project-cards/ProjectCard'
import React, {useState} from 'react'
import TryHarder from '../../assets/TryHarder.PNG'
import BlackJack from '../../assets/BlackJack.jpg'
import VirtualDreamBoard from '../../assets/VirtualDreamBoard.PNG'
import WiiFitness from '../../assets/WiiFitness.PNG'
import MonsterHunter from '../../assets/MonsterHunter.PNG'
import CoreConnect from '../../assets/CoreConnect.PNG'

const medias = [
  {
    title: "Core Connect",
    photo: CoreConnect,
    url: "https://coreconnect.netlify.app/",
    description: `This is a project that was in a team of 4 through the Co.Lab organization. 
    It is a working MVP that would assist people to find a menotr based on their core values.`,
    active: true

  },
  {
    title: "TryHarder",
    photo: TryHarder,
    url: "https://the-tryharder.com/",
    description: `I created this brand to learn how to use shopify and sell to an audience. I reached over 10k users and converted a small percentage into sales. 
    The brand is no longer active.`,
    active: false

  },
  {
    title: "Virtual Dream Board",
    photo: VirtualDreamBoard,
    url: "https://virtual-dreamboard.netlify.app/#/",
    description: `This was my capstone project with Coding Temple. I am still working on it.
    The inspiration behind this was having somewhere where your goals are visual and drawn out nicely.
    Also with some background help to with those goals`,
    active: true

  },
  {
    title: "Python Black Jack",
    photo: BlackJack,
    url: "https://github.com/Joymink/BlackJackPython",
    description: `A simple python blackjack game, I will eventually use this logic to create a
    web application to play black jack.`,
    active: true

  },
  {
    title: "Wii Sports Fitness",
    photo: WiiFitness,
    url: "https://github.com/Joymink/WiiSportsGymSpoof",
    description: `A fun Wii fitness spoof website. Implying that there is a real
    Wii fitness training gym.`,
    active: true

  },
  {
    title: "Monster Hunter",
    photo: MonsterHunter,
    url: "https://jaymonsterhunter.netlify.app/",
    description: `A game I created based on the game SpyFall, it is halloween themed and fun for the whole family to play`,
    active: true

  }


]

const Projects = () => {
  let [currentMedia, setCurrentMedia] = useState(0);

  const goForward = ()=>{
    if(currentMedia===medias.length-1){
      setCurrentMedia(0);
    }
    else{
      setCurrentMedia(currentMedia=currentMedia+1)
    }
  }
  const goBackward = () =>{
    if(currentMedia===0){
      setCurrentMedia(medias.length-1);
    }
    else{
      setCurrentMedia(currentMedia=currentMedia-1)
    }
  }
  return (
    <div className='projects-container'>
      <div className='projects-content_container'>
        <div className='project-card'>
          <button  onClick={()=> goBackward()} className='ltgt-button'> &lt; </button>
          <ProjectCard 
            title={medias[currentMedia].title} 
            photo={medias[currentMedia].photo} 
            description={medias[currentMedia].description} 
            url={medias[currentMedia].url}
            active = {medias[currentMedia].active}
          />
          <button onClick={()=> goForward()} className='ltgt-button'> &gt; </button>
        </div>
        <div className='arrow-button_container'>
          <button onClick={()=> goBackward()}  className=' arrow-button'> &lt; </button>
          <button onClick={()=> goForward()} className=' arrow-button'> &gt; </button>
        </div>
      </div>
      
     
    </div>
  )
}

export default Projects
