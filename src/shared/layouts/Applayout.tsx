import { MainFooter, MainNave } from '@UI/index';

export default function Applayout({ children }) {
  return (
    <>
      <MainNave />
      {children}
      <MainFooter />
    </>
  );
}
