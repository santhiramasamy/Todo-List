function Header(props) {
    console.log(props); // username is passed as props

    return (
        <header>
            <h1 style={{ textAlign: "center" }}>To-Do-List</h1>
        </header>

    );
}

export default Header;