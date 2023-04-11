import './style.scss'
import image1 from "./karap.jpg"

function Section() {
    return (
        <>
            <div className='section'
            style={{ backgroundImage: `url(${image1})`,
            }}>
                <div className='P-form'>
                    <input className='P-input' placeholder='Search' />
                    <button className='P-button'></button>

                </div>

            </div>
        </>
    )
}
export default Section