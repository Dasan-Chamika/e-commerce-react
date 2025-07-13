/** @format */
import menu from "../../assets/menu-svgrepo-com.svg";
import search from "../../assets/search-alt-2-svgrepo-com.svg";
import cart from "../../assets/cart-plus-svgrepo-com.svg";

function Header() {
  return (
    <header className="w-full p-4 bg-default-blue flex justify-between items-center fixed top-0 left-0 z-[101] overflow-hidden">
      {/* header left */}
      <div className="flex items-center gap-x-2">
        <img src={menu} alt="menu" className="max-w-6 cursor-pointer" />
        <h1 className="text-sm font-semibold text-pink-200">Click & Buy</h1>
        <div className="flex gap-x-2 rounded-full bg-gray-200 overflow-hidden pl-1 pr-2">
          <input
            type="text"
            className="outline-none p-2 font-semibold text-sm bg-inherit w-[200px]"
            placeholder="Search"
          />
          <img src={search} alt="search" className="max-w-6 cursor-pointer" />
        </div>
      </div>

      {/* header right */}
      <div className=" relative pt-1 pr-1">
        <img src={cart} alt="cart" className="max-w-6 cursor-pointer" />
        <div className="w-5 h-5 absolute rounded-full bg-black text-white flex justify-center items-center text-sm top-0 right-0 translate-x-2/4 -translate-y-2/4">
          2
        </div>
      </div>
    </header>
  );
}

export default Header;
