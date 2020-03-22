import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import NavUp from './modules/NavUp'


let mobilemenu = new MobileMenu();
let navup = new NavUp();


if (module.hot) {
    module.hot.accept()
}