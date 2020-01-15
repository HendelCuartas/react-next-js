import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div class="Home-circle-bg"></div>
      <h1>Home</h1>
      <style jsx>
        {`
          .Home-circle-bg {
            position: absolute;
            width: 120vw;
            height: 120vw;
            background: green;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </Layout>
  );
}