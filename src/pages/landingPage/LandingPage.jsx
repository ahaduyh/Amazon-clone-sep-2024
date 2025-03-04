import Carousel from "../../Components/carousel/CarouselEffect";
import Category from "../../Components/category/Category";
import Layout from "../../Components/layout/Layout";
import Product from "../../Components/product/Product";
function LandingPage() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default LandingPage;
