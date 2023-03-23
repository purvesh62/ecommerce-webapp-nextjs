import styled from "styled-components";
import { ProductStyles } from "@/styles/ProductStyle";
import Link from "next/link";

const Product = ({ product }) => {
  // Extract info from props
  const { title, price, media, slug } = product.attributes;
  return (
    <ProductStyles>
      <Link href={`/product/${slug}`}>
        <div>
          <img
            src={media.data.attributes.formats.small.url}
            alt="Product image"
          />
        </div>
      </Link>
      <h2>Title: {title}</h2>
      <h3>Price: {price}</h3>
    </ProductStyles>
  );
};

export default Product;
