import React from 'react'

function Footer () {
  return (
    <footer className='block'>
      <section className='block close'>
        <p>
          The project is under Open Source
          {' '}
          <a href='https://github.com/DerinMavi/react-inputrange/blob/master/LICENSE'>
            MIT License
          </a>
        </p>
        <p>
          Built with
          {' '}
          <span className='hearts'>♥</span>
          {' '}
          • Maintained by
          {' '}
          <a href='http://github.com/DerinMavi'>DerinMavi</a>
        </p>
        <p>© 2015 Bhargav Anand</p>
      </section>
    </footer>
  )
}

export default Footer
