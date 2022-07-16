import React, { Suspense } from 'react';
import Main from './Components/Main';
import './Components/style.css';
import { useTranslation } from "react-i18next";



function Apppoke() {
  return (
    <>
    <Suspense>
      <Welcome/>
    </Suspense>
      <Main/>
    </>
  );
}

export default Apppoke;