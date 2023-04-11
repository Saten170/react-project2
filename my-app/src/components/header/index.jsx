import './style.scss'
function Header() {
    return (
        <>
            <div className='header'>
                <div><a className='P-logo' href="">Catalog-Z</a></div>
                <div className='P-container'>
                    <a id='photos' href="">Photos</a>
                    <a href="">Videos</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </>
    )
}

export default Header
