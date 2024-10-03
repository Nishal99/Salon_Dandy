import React,{ useState , useEffect} from 'react'
import Image from '../assets/Image/Image'
import '../assets/css/About.css'




const About = () => {
    
const [isVisible , setVisible] = useState(false)


    const showDiv = () => {
      setVisible(!isVisible);  // Show the div when the button is clicked
    };


    

  return (
    <div className='about'>
        <div className="about-welcome">
        <div className="about-contain">
          <h1>We are a group of Experts</h1>
        </div>
      </div>
    <h2 className='about-experience' >More than 15 years of Experience </h2>
    <button className='about-btn' onClick={showDiv}>
       <p>V</p> 
       <p>I</p> 
       <p>S</p> 
       <p>I</p> 
       <p>O</p> 
       <p>N</p> <br/>
       <p>&</p> <br/>
       <p>M</p> 
       <p>I</p> 
       <p>S</p> 
       <p>S</p> 
       <p>I</p> 
       <p>O</p> 
       <p>N</p> 
      </button>
    {isVisible && (
    <div className="vision-mission">
    <div className={`vision ${isVisible ? 'visible' : ''}`}>
      <h2>Our Vision</h2>
      <p className='p-para'>
        Provide exceptional beauty and grooming services by utilizing the latest technology and modern equipment. We are committed to delivering high-quality, personalized experiences through our team of highly qualified and skilled professionals. Our goal is to enhance the beauty and confidence of our clients, ensuring they leave our salon feeling rejuvenated and satisfied.
      </p>
    </div>
    <div className={`mission ${isVisible ? 'visible' : ''}`}>
      <h2>Our Mission</h2>
      <p className='p-para'>
        Our vision at Salon Dandy is to be the leading salon in Sri Lanka, renowned for providing the best salon services through the use of cutting-edge technology and modern equipment. We aspire to set the standard in the beauty industry by continuously enhancing our services and ensuring our clients experience unparalleled satisfaction and confidence.
      </p>
    </div>
  </div>
    )}

    <div className="aboutSandya">
            <div className="sandayImage" data-aos="fade-right"  >
                <img src={Image.sandyab} alt="Sandya Bandara"/>
            </div>
            <div className="sandya-info" data-aos="fade-left" >
                <h1>Sandya Bandara</h1>
                    <p>"When you look beautiful, you truly feel beautiful and that feeling is the 
                      most important thing to any girl" <br/><br/>
                      Sandya Bandara~<br/> <br/>
                      A makeup artist with more than 10 years of experience working with creative bridal designs ranging from Kandian, Indian to Western. Working with all the lovely bride's along with her 
                      NVQ Qualification. <br/><br/>Sandya, is always motivated to do fresh, flawless make overs which drives a signature style of her 
                      own that is feminine and natural. Being recognized as one of the most talented bridal dressers/ Make-up artists In 
                      Sri Lanka, Sandya is invited to host many Bridal related programs such as <span className='bold-high'>Subasiri</span>, <span className='bold-high'>Nugasewana</span>, in Popular Sri Lankan 
                      TV channels. If you are looking for a committed, reliable and a friendly beautician to make you stand out of the 
                      crowd and be transformed in to your best selves, Sandya Bandara of Salon Dandy is the best choice.
                    </p>          
            </div>
    </div>
    <div className="aboutPriyantha">
    <div className="sandayImage"  data-aos="fade-left" >
                <img src={Image.priyanthab} alt="Sandya Bandara"/>
            </div>
            <div className="sandya-info" data-aos="fade-right" >
                <h1>Priyantha Bandara</h1>
                    <p>The loving husband of Sandya and co founder of Salon Dandy is the backbone of the entire process of the managing the Salon. While mainly focussing on brand quality and maintaining it, the duo is always on the search for latest trends in bridal dressings and technological advancements which can uplift our customers look. <br/><br/>Salon Dandy is prepared to make our brides stand out from others with distinguished natural look with creative dressings.
                    </p>          
            </div>
           
    </div>


            <div className="companyStory" >
            <div className="story-image">
                    <img src={Image.saloon} className='story-image1' alt="Our Story"/>
                </div>
                <div className="storyText">
                    <h1>Our Story</h1>
                    <p>Our journey began over 12 years ago, fueled by a passion for style and fashion. From our modest beginnings, we've evolved into a team of dedicated experts, committed to curating exceptional service and unforgettable experiences. With each year, we blend innovation with elegance, crafting moments that inspire and delight. <br/><br/>Our mission is to transform every client interaction into a memorable event, driven by creativity and a relentless pursuit of excellence. Join us as we continue to redefine the essence of style and sophistication.</p>
                </div>
                
            </div>
          
        </div>

  )
}

export default About