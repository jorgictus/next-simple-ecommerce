const Header = () => (
  <>
    <nav className="flex items-center justify-between p-12">
      <div aria-label="open menu">
        <img alt="vercel" width="120" src="/vercel.svg" />
      </div>
      <div className="flex items-center">
        <p className="px-5 text-xl" aria-label="bikes">
          Bikes
        </p>
        <p className="px-5 text-xl" aria-label="delivery">
          Delivery
        </p>
        <p className="px-5 text-xl" aria-label="contato">
          Contact
        </p>
      </div>
    </nav>
  </>
)

export default Header
