import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav>
                    <a id="logo" href=" ">Todo App</a>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                    </ul>
                </nav>
            </header>
        </>
    )

}

export default Navbar;