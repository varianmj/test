// destructring
import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            menus: [
                {label: 'Home',path: "/"},
                {label: 'About',path: "/about"},
                {label: 'Contact',path:"/contact"}
            ]
        }
    }
    render(){
        return(
            <div>
            <ul>
                {this.state.menus.map(menu => (
           <li style={styles.menuLi}>
               <Link to= {menu.path}>{menu.label}</Link>
               </li>
                ))}
        
            </ul>
           </div>
        )
    }
}
const styles = {
    menuLi: {
        display :'inline-block',
        padding : '10px'
    }
}
export default Navbar;