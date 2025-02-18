// header - h1 h2 logo emojis

function Header() {
  return (
    <div className="header">
      <header className="center">
        <svg
          className="react-logo"
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          width="1001.13"
          height="890.65"
          viewBox="0 0 1001.13 890.65"
        >
          <defs></defs>
          <circle
            className="cls-1 react-logo__circle"
            cx="504.59"
            cy="444.48"
            r="89.57"
          />
          <path
            className="cls-2 react-logo__ring react-logo__ring--1"
            d="M504.59,262.37c120.25,0,232,17.26,316.2,46.26,101.49,34.94,163.88,87.9,163.88,135.85,0,50-66.13,106.24-175.11,142.35-82.4,27.3-190.82,41.55-305,41.55-117,0-227.87-13.38-311.18-41.85-105.42-36-168.91-93-168.91-142,0-47.57,59.57-100.11,159.64-135C268.68,280,383.16,262.37,504.59,262.37Z"
          />
          <path
            className="cls-2 react-logo__ring react-logo__ring--2"
            d="M346.06,354c60.07-104.17,130.83-192.32,198-250.81,81-70.46,158-98,199.56-74.1,43.29,25,59,110.36,35.83,222.81-17.52,85-59.34,186-116.37,284.95C604.64,638.18,537.69,727.51,471.4,785.45c-83.87,73.32-165,99.85-207.43,75.37-41.2-23.77-57-101.63-37.2-205.74C243.48,567.11,285.39,459.15,346.06,354Z"
          />
          <path
            className="cls-2 react-logo__ring react-logo__ring--3"
            d="M346.21,537.06C286,433,244.92,327.66,227.82,240.23c-20.61-105.33-6-185.87,35.46-209.9,43.25-25,125.08,4,210.93,80.24C539.12,168.2,605.77,254.89,663,353.69,721.6,455,765.55,557.59,782.65,644c21.63,109.29,4.12,192.79-38.31,217.35-41.16,23.83-116.49-1.4-196.81-70.52C479.66,732.39,407.05,642.15,346.21,537.06Z"
          />
        </svg>
      </header>
      <h1>React Flashcards</h1>
      <p>🧠Expand your react knowledge, one flashcard at a time!🐌</p>
    </div>
  );
}

export default Header;
