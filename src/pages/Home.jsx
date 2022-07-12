import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AllProducts from "../components/products/AllProducts";
import Flashsale from "../components/products/Flashsale";
import NewProduct from "../components/products/NewProduct";
import Slider from "../components/Slider";
import Topbar from "../components/topbar/Topbar";
import { useProducts } from "../lib/GetProducts";

export default function Home() {
    const [discountProducts, setDiscountProducts] = useState([]);
    const [newCollectionProducts, setNewCollectionProducts] = useState([]);

    const { products } = useProducts();

    useEffect(() => {
        const fetchProducts = () => {
            const discountProduct = [];
            const NewProduct = [];

            products.forEach((product) => {
                // discount products
                if (product.discount) {
                    discountProduct.push(product);
                }
                // new products
                if (product.condition) {
                    NewProduct.push(product);
                }
            });
            setDiscountProducts(discountProduct);
            setNewCollectionProducts(NewProduct);
        };
        fetchProducts();
    }, [products]);

    return (
        <>
            <Topbar />
            <div style={{ marginTop: "170px" }}>
                <Slider />
                <Categories />
                <Flashsale discountProducts={discountProducts} />
                <NewProduct products={newCollectionProducts} />
                <AllProducts products={products} />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
