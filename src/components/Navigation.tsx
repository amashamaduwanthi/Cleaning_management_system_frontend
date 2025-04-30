import {Link} from "react-router";
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <header className="bg-teal-900 text-white shadow=lg " >
                <nav className="px-4 py-3">
                    <ul className="flex space-x-4">
                        <Link to="" className='custom-link'>Home</Link>

                    </ul>
                </nav>
            </header>
        </>
    )
}


