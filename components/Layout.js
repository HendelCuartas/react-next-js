import Header from './Header';

const layoutStyle = {
  padding: 20,
  boxSizing: 'border-box',
  width: '80%',
  height: 'auto',
  margin: '0 auto'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;