/** @format */
import home from "../../assets/home-svgrepo-com.svg";
import category from "../../assets/category-2-svgrepo-com.svg";
import profile from "../../assets/profile-round-1346-svgrepo-com.svg";
import { Link } from "react-router-dom";

function Footer() {
  const footerBtns = [
    {
      btnImg: home,
      alt: "Home",
      path: "/",
    },
    {
      btnImg: category,
      alt: "Category",
      path: "/category",
    },
    {
      btnImg: profile,
      alt: "Profile",
      path: "/user",
    },
  ];
  return (
    <footer className="fixed bottom-0 left-0 z-[101] w-full bg-default-blue p-4 flex justify-between items-center ">
      {footerBtns.map((btn, index) => (
        <Link to={btn.path} key={index}>
          <img src={btn.btnImg} alt={btn.alt} className="max-w-6" />
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
