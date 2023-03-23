import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  ProductQuantity,
  Buy,
} from "@/styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import useStateContext from "lib/context";

function ProductDetails({}) {
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext();

  const { query } = useRouter();

  // Fetch data from Stripi
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error...{error.message}</p>;
  const { title, description, media } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img
        src={
          media.data.attributes.formats.medium
            ? media.data.attributes.formats.medium.url
            : media.data.attributes.formats.small.url
        }
        alt={title}
      />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>

        <ProductQuantity>
          <span>Quantity</span>

          <button onClick={decreaseQuantity}>
            <AiFillMinusCircle />
          </button>

          <p>{quantity}</p>

          <button onClick={increaseQuantity}>
            <AiFillPlusCircle />
          </button>
        </ProductQuantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, quantity)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}

export default ProductDetails;
