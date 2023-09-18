import React from 'react';
import { Outlet } from 'react-router-dom';
import UserDescription from '../components/userAnalytics/UserDescription';
import Background from './../components/common/Background';

export default function Search() {
  return (
    <>
      <UserDescription />
      <Background></Background>
    </>
  );
}
