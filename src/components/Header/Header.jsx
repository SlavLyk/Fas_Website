import './Header.css'   
import Logo from '../../icons/Logo.svg'
import BurgerMenu from '../../icons/BurgerMenu.svg'

function Header() {
    return (
        <div className ='header'>
            <div className ='logo'>
                <img height={40} src={Logo} alt='Logo'/>
            </div>
            <div className ='headerMid'>
                <div className ='headerItem'>
                    <a href="#">Games</a>
                </div>
                <div className ='headerItem'>
                    <a href="#">About us</a>
                </div>
                <div className ='headerItem'>
                    <a href="#">Contact</a>
                </div>  
            </div>
            <div className = 'burgerMenu'>
                <img height={20} width={34} src={BurgerMenu} alt='Logo'/>
            </div>
        </div>
    )
}

export default Header
