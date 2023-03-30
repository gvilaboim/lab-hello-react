const Info = () => {
    return (
      <div className='info'>
        <div className='info-box'>
          <img
            src='/images/section1.png'
            alt='section1'
          />
          <div>
            <h5>Declarative</h5>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className='info-box'>
          <img
            src='/images/section2.png'
            alt='section2'
          />
          <div>
            <h5>Components</h5>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className='info-box'>
          <img
            src='/images/section3.png'
            alt='section3'
          />
          <div>
          
            <h5>Single-Way</h5>
            <p>A set of immutable values are passed to their components</p>
          </div>
        </div>
        <div className='info-box'>
          <img
            src='/images/section4.png'
            alt='section4'
          />
          <div>
            
            <h5>JSX</h5>
            <p>Statically typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Info