import { Fragment,useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import CartDropDown from "../../components/cart-drop-down/cart-drop-down.component";
const Navigation=()=>{
    //const {currentUser}=useContext(UserContext);
    const currentUser = useSelector(selectCurrentUser);
    //console.log(currentUser)
    const {isCartOpen} =useContext(CartContext);

    return(
        <Fragment>
            <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            
            <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Shop
            </Link>
            {currentUser? (<span className="nav-link" onClick={signOutUser}> Sign-Out</span>
            ):(<Link className='nav-link' to='/auth'>
                Sign-In
            </Link>)}
            <CartIcon/>

            { isCartOpen && <CartDropDown/>}
            
            </div>
            
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation