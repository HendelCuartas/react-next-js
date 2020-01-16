import Layout from '../components/layout';

const homeCircleBgStyle = {
  position: 'absolute',
  width: '120vw',
  height: '120vw',
  background: 'tomato',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '60vw',
  zIndex: -1
};

export default function Home() {
  return (
    <Layout>
      <div style={homeCircleBgStyle}></div>
    </Layout>
  );
}