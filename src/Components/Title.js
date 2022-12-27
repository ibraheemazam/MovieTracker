// import react from 'react';

export default function Title ({ children }) {

  return (
    <header className="container">
      <h1 id="title">
        {children}
      </h1>
    </header>
  )
}

