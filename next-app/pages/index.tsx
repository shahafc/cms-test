import React from 'react';
import { GetServerSideProps } from 'next';
import { sanityClient } from '../lib/sanity';
import Insight from '../components/Insight';
import CauseOfAction from '../components/CauseOfAction';

export const getServerSideProps: GetServerSideProps = async () => {
  const insights = await sanityClient.fetch('*[_type == "insight"]');
  const causesOfAction = await sanityClient.fetch('*[_type == "causeOfAction"]');
  return { props: { insights, causesOfAction } };
};

interface Props {
  insights: any[];
  causesOfAction: any[];
}

const HomePage: React.FC<Props> = ({ insights, causesOfAction }) => (
  <div>
    <h1>Welcome to our Next.js App</h1>
    <h2>Insights</h2>
    {insights.map((insight) => (
      <Insight key={insight._id} insight={insight} />
    ))}
    <h2>Causes of Action</h2>
    {causesOfAction.map((cause) => (
      <CauseOfAction key={cause._id} cause={cause} />
    ))}
  </div>
);

export default HomePage;