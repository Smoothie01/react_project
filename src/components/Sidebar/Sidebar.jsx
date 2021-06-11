import {NavLink} from "react-router-dom";
import css from "./Sidebar.module.css"


const Sidebar = ()=>{
    return(
        <section className={css.sidebar}>
            <nav className={css.nav}>
                <NavLink exact to="/" activeClassName={css.active__link} className={css.nav__link}>Profile</NavLink>
                <NavLink to="/friends" activeClassName={css.active__link} className={css.nav__link}>Friends</NavLink>
                <NavLink to="/feed" activeClassName={css.active__link} className={css.nav__link}>Messages</NavLink>
                <NavLink to="/news" activeClassName={css.active__link} className={css.nav__link}>News</NavLink>
                <NavLink to="/music" activeClassName={css.active__link} className={css.nav__link}>Music</NavLink>
                <NavLink to="/settings" activeClassName={css.active__link} className={css.nav__link}>Settings</NavLink>
            </nav>
        </section>
    );
}

export default Sidebar;
