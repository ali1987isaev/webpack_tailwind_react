import React from 'react';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='min-h-screen w-full flex flex-col items-center justify-center text-center gap-5'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='flex flex-col items-center justify-center text-center'>
        <i>{error.statusText && error.statusText}</i>
        <small>
          <i>{error.error.message && error.error.message}</i>
        </small>
      </p>
    </div>
  );
}