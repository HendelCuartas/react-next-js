import Header from './header';

const layoutStyle = {
  width: '80%',
  height: 'auto',
  margin: '0 auto'
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