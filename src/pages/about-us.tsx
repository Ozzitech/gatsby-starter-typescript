import * as React from 'react';
import { Link } from 'gatsby';

import { PageLayout } from 'components';

const AboutUS = () => {
  return (
    <PageLayout title="About Us">
      <h1>About Us</h1>
      <p>Welcome to About Us</p>
      <Link to="/">Go back to the Homepage</Link>
    </PageLayout>
  );
};

export default AboutUS;
