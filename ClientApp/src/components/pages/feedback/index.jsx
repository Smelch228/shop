import React from 'react';

export default function FeedbackPage() {
  return (
    <div className='d-flex'>
      <img
        src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
        alt='John Doe'
        className='me-3 rounded-circle'
        style={{ width: '60px', height: '60px' }}
      />
      <div>
        <h5 className='fw-bold'>
          John Doe
          <small className='text-muted'>Posted on February 19, 2021</small>
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
        <div className='d-flex mt-4'>
          <img
            src='https://mdbcdn.b-cdn.net/img/new/avatars/4.webp'
            alt='Anna Doe'
            className='me-3 rounded-circle'
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h5 className='fw-bold'>
              Anna Doe
              <small className='text-muted'>Posted on February 19, 2021</small>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}