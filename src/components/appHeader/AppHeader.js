import './appHeader.scss';
import {Link, NavLink} from 'react-router-dom';

const AppHeader = (props) => {

    // const color = {'color': '#9F0013'}

    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    {/* <li><a 
                            href="#" 
                            onClick={() => props.onPageSelected('Characters')}
                            style={(props.selectedPage ==='Characters' || props.selectedPage === '') ? color : {'color': '#000000'}}
                            >Characters</a></li> */}
                    <li><NavLink 
                                end 
                                style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})}
                                to="/">Characters</NavLink></li>
                    /
                    {/* <li><a 
                            href="#"
                            onClick={() => props.onPageSelected('Comics')}
                            style={props.selectedPage ==='Comics' ? color : {'color': '#000000'}}
                            >Comics</a></li> */}
                    <li><NavLink 
                                style={({isActive}) => ({color: isActive ? '#9f0013' : 'inherit'})}
                                to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;