/** @format */

import { useState } from "react";
import Ads from "./Ads";
import Product from "./Product";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;
  return (
    <div className="w-full overflow-y-auto p-3">
      <Ads />
      <Product title="Trending Products" />
      <Product title="Electronic Items" />
      <Product title="Clothing Items" />
    </div>
  );
}

export default Home;
