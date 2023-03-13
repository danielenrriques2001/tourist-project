import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {

  const router = useRouter();
  return (
    <>
      
      <Layout>
        <SWRConfig>
          <Component {...pageProps} router = {router}  />
        </SWRConfig>
      </Layout>
    </>
  );
}

export default MyApp;
