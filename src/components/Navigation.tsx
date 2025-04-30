import {Link} from "react-router";
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <header className="bg-teal-900 text-white shadow=lg " >
                <nav className="px-4 py-3">
                    <ul className="flex space-x-4">
                        <Link to="/home" className='custom-link'>Home</Link>
                        <Link to="/service" className='custom-link'>Service</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}


