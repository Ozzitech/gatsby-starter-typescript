import * as React from 'react';
import { Link } from 'gatsby';
import { PageLayout } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from 'Redux/actions';

const IndexPage = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: any) => {
    return state.DarkModeReducer;
  });
  return (
    <PageLayout title="Home">
      <h1>Hi Developers</h1>
      <p>Welcome to new Custom Gatsby Starter </p>
      <button
        type="button"
        style={{
          backgroundColor: isDarkMode ? 'black' : 'white',
          color: isDarkMode ? 'white' : 'black',
        }}
        onClick={() => {
          dispatch(toggleDarkMode());
        }}
      >
        Toggle Dark Mode{' '}
      </button>
      <p>
        <Link to="/about-us/">Go to About Us</Link> <br />
      </p>
    </PageLayout>
  );
};
export default IndexPage;
