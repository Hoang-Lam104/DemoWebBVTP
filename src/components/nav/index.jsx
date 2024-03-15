import { useEffect, useState } from "react"
import { getMenu } from "../../api/categoryApi"
import { NavLink } from "react-router-dom"
import './style.css'

const Navbar = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        getMenu().then((response) => {
            setMenu(response.data)
        })
    }, [])

    const parentMenu = menu.filter(item => item.IsParent && item.Sort === 0)

    return (
        <ul className="navbar">
            {parentMenu.sort((a, b) => { return a.Sort_Node > b.Sort_Node }).map(item => {
                return (
                    <li key={item.Id}><NavLink className='nav_link' to={item.Handler}>{item.Name}</NavLink></li>
                )
            })}
        </ul>
    )
}

export default Navbar