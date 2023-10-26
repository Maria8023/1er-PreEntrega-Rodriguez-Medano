import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import fondo from "../CartWidget/assets/fondo.jpg"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <h1 className={classes.navbar}>Candy Shop</h1>
            <img className={classes.fondo} src={fondo} alt="" />
            <section>
                <button className={classes.button}>Chocolates</button>
                <button className={classes.button}>Golosinas</button>
                <button className={classes.button}>Alfajores</button>
                <button className={classes.button}>Salad Bar</button>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default Navbar