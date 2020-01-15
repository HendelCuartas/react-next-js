import Layout from '../components/layout';
import COLORS from '../utils/brand_colors';

const homeCircleBgStyle = {
  position: 'absolute',
  width: '120vw',
  height: '120vw',
  background: COLORS.purple,
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