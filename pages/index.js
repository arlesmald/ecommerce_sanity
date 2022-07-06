import React from 'react' //Para que desaparezca el error en esta linea, hay que crear el archivo .babelrc y modificar el archivo .eslintrc.json

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) =>  (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
         {products?.map(
          (product) => <Product key={product._id} product={product} /> )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )

//Instead of using useEffect we create a funtion that will return props to render on the page
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; //This is a sanity query
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}

export default Home

