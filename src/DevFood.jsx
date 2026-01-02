/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search
 *  - ReasturentContainer
 *     - ReasturentCart
 * Footer
 *  - copyright
 *  - links
 *  - Adress
 *  - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./src/assets/g_dev.png" alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-bar">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default AppLayout;
