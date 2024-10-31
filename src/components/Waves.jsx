const Waves = () => {
  return (
    <div className='wave-container'>
      <svg
        className='wave wave1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path d='M0,40 C150,0 350,80 500,40 C650,0 850,80 1000,40 C1150,0 1200,30 1200,120 L0,120 Z'></path>
      </svg>

      <svg
        className='wave wave2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path d='M0,60 C150,20 350,100 500,60 C650,20 850,100 1000,60 C1150,20 1200,50 1200,120 L0,120 Z'></path>
      </svg>

      <svg
        className='wave wave3'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
      >
        <path d='M0,60 C150,20 350,100 500,60 C650,20 850,100 1000,60 C1150,20 1200,50 1200,120 L0,120 Z'></path>
      </svg>
    </div>
  );
};
export default Waves;
