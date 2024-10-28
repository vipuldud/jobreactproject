// src/components/JobCard.js
import React from 'react';
import styled from 'styled-components';

const JobCard = ({ job }) => {
  return (
    <Card>
      <JobInfo>
        <JobTitle>{job.title}</JobTitle>
        <Company>{job.company}</Company>
        <Location>{job.location}</Location>
        <Type>{job.type}</Type>
        <Description>{job.description}</Description>
      </JobInfo>
      <ApplyButton>Apply Now</ApplyButton>
    </Card>
  );
};

export default JobCard;

const Card = styled.div`
  background-color: #f9fafb;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;
  width: 100%;
  margin: 20px auto;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }
`;

const JobInfo = styled.div`
  text-align: center;
  flex: 1;
  margin-bottom: 16px;
`;

const JobTitle = styled.h2`
  font-size: 1.6em;
  color: #333;
  margin: 0;
  font-weight: 600;
`;

const Company = styled.h3`
  font-size: 1.2em;
  color: #555;
  margin: 8px 0;
`;

const Location = styled.p`
  font-size: 0.95em;
  color: #888;
  margin: 4px 0;
`;

const Type = styled.p`
  font-size: 1em;
  color: #4caf50;
  font-weight: bold;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #666;
  line-height: 1.5;
  margin: 10px 0;
  max-height: 60px;
  overflow: hidden;
`;

const ApplyButton = styled.button`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #ffffff;
  border: none;
  padding: 14px 24px;
  border-radius: 30px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: translateY(-3px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  }
`;
