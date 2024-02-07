import '../footer/footer.css'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.jpg'

const Footer = () => {
  return (
    <div  className='footer-container' id='contact'>
      <div className='socials-container'>
          <div onClick= {()=>window.open("https://www.instagram.com/jayden.t.e/") }className='social instagram-container'>
            <img src={instagram} className='social-icon instagram' alt="instgram" />
            <p>@Jayden.t.e</p>
          </div>

          <div onClick={()=>window.open("https://github.com/Joymink")} className='social'>
            <img src={github} className='social-icon github' alt="instgram" />
            <p>@Joymink</p>
          </div>

          <div onClick={()=>window.open("https://www.linkedin.com/in/jayden-evans-tejuan/")} className='social'>
            <img src={linkedin} className='social-icon linkedin' alt="instgram" />
            <p>@jayden-evans-tejuan</p>
          </div>

          <div className='social linkedin-container'>
            <img src={email} className='social-icon linkedin' alt="instgram" />
            <p>jayden7evans@gmail.com</p>
          </div>
      </div>
      <div className="copy">
          <p>&copy;2024 Website Created by: Jayden Evans. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
