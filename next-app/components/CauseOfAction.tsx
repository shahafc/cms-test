import React from 'react';

interface CauseOfActionProps {
  name: string;
  description: string;
}

const CauseOfAction: React.FC<CauseOfActionProps> = ({ name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CauseOfAction;