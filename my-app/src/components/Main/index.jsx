import './style.scss'
import image1 from "./img1.jpg"
import image2 from "./img2.jpg"
import image3 from "./img3.jpg"
import image4 from "./img4.jpg"



function Main(){
    return(
        <>
        <div className='main'>
            <div className='P-main'>
                <h2 className='P-main-text'>
                Latest Photos</h2>
                <div className='P-main-section'>
                        Page
                        <input className='P-main-input' />
                        of 200
                    </div>
            </div>
            <div className='G-main'>
                <div className='G-main-images'>
                    <div className='G-main-image' ><img src={image1} alt="" /> </div>
                    <div className='G-main-image'><img src={image2} alt="" /></div>
                    <div className='G-main-image' ><img src={image3} alt="" /></div>
                    <div className='G-main-image'><img src={image4} alt="" /></div>
                </div>
               <div className='G-main-images'>
                 <div className='G-main-image'><img src={image1} alt="" /></div>
                 <div className='G-main-image'><img src={image2} alt="" /></div>
                 <div className='G-main-image'><img src={image3} alt="" /></div>
                 <div className='G-main-image'><img src={image4} alt="" /></div>
               </div>
               <div className='G-main-images'>
                 <div className='G-main-image'><img src={image1} alt="" /></div>
                 <div className='G-main-image'><img src={image2} alt="" /></div>
                 <div className='G-main-image'><img src={image3} alt="" /></div>
                 <div className='G-main-image'><img src={image4} alt="" /></div>
               </div>
               <div className='G-main-images'>
                 <div className='G-main-image'><img src={image1} alt="" /></div>
                 <div className='G-main-image'><img src={image2} alt="" /></div>
                 <div className='G-main-image'><img src={image3} alt="" /></div>
                 <div className='G-main-image'><img src={image4} alt="" /></div>
               </div>
                
            </div>
        </div>
        </>
    )
}
export default Main