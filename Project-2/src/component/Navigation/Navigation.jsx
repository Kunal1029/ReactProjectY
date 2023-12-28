import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles)
  return (
    <>
      <nav className={`container ${styles.navigation}`}>
        <div className="logo">
            <img src="/logo.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
