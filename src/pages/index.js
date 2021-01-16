import Home from './home';

export const IndexPage = () => {
  return <Home></Home>;
};

IndexPage.getInitialProps = () => {
  return { namespacesRequired: ['common'] };
};

export default IndexPage;
