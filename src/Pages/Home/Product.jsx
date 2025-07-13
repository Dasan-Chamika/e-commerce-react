/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { ProductsArr } from "./ProductsArr";

const Product = ({ title }) => {
  return (
    <section className="w-full mt-6 shadow-product-dropshadow py-2 px-3 rounded-md">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {ProductsArr?.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductItem = ({ prodImg, prodTitle, prodPrice }) => (
  <div className="w-full mb-9">
    <img
      src={prodImg}
      alt={prodTitle}
      className="rounded-md w-full h-[83px] object-cover"
    />
    <h3 className="text-md font-medium mt-1 text-stone-900">{prodTitle}</h3>
    <div className="text-sm text-stone-900">Rs. {prodPrice}/=</div>
  </div>
);
