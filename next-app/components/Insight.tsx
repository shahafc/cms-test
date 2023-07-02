import React from 'react';

interface InsightProps {
  title: string;
  openingSentence: string;
  insightDetails: string;
  companyInformation: string;
  annualRevenue: number;
  causeOfAction: {
    name: string;
    description: string;
  };
}

const Insight: React.FC<InsightProps> = ({
  title,
  openingSentence,
  insightDetails,
  companyInformation,
  annualRevenue,
  causeOfAction,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{openingSentence}</p>
      <p>{insightDetails}</p>
      <p>{companyInformation}</p>
      <p>{annualRevenue}</p>
      <div>
        <h2>{causeOfAction.name}</h2>
        <p>{causeOfAction.description}</p>
      </div>
    </div>
  );
};

export default Insight;