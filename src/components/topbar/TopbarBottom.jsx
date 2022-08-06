import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import SearchBar from "./SearchBar";
import style from "./styles/TopbarBottom.module.css";

export default function TopbarBottom() {
  const [searchTerm, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  const { qty, products } = useProducts();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      if (products) {
        const reserve = [];
        products.forEach((product) => {
          if (
            product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            reserve.push(product);
          }
        });
        setSearchProduct(reserve);
      }
    }
  }, [products, searchTerm]);

  return (
    <div className={style.topbarBottom}>
      <div className="container">
        <div className={style.main}>
          <div className={style.logo}>
            <h4
              onClick={() => {
                navigate("/");
              }}
            >
              Brand.
            </h4>
          </div>
          <div className={style.search}>
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            <div className={style.suggestions}>
              {searchTerm &&
                searchProduct.map((p) => (
                  <div
                    onClick={() => {
                      navigate(`/singleItem`, {
                        state: { item: p },
                      });
                    }}
                    key={p.id}
                  >
                    {p.title}
                  </div>
                ))}
            </div>
          </div>
          <div className={style.right}>
            <div>
              <span>0</span>
              <MdOutlineFavoriteBorder size={30} />
            </div>
            <div
              onClick={() => {
                navigate("/cartitem");
              }}
            >
              <span>{qty}</span>
              <BsCart2 size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
