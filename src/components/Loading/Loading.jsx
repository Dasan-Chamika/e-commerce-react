/** @format */
import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className=" fixed left-0 top-0 w-screen h-screen flex items-center justify-center z-[999] bg-opacity-80 bg-black">
      <div className={style.custom_spinner}></div>
    </div>
  );
};

export default Loading;
