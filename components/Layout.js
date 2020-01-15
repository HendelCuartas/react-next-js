import Header from './Header';

const layoutStyle = {
  padding: '20px',
  boxSizing: 'border-box',
  width: '80%',
  height: 'auto',
  margin: '0 auto',
  background: 'tomato'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
    `}</style>
  </div>
);

export default Layout;