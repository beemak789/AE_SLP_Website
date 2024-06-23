import React from 'react';

const AboutMe = () => {
  return (
    <div className='aboutMe about-me-container'>
      <div className='about-me-subcontainer'>
        <img
          src='/profilePhoto.jpeg'
          alt='profile logo'
          width={290}
          height={330}
          className='profile-photo'
        ></img>
        <div className="about-me-text">
          <h5 className='about-me-title' >
            Brandy Mak, <em>Speech-Language Pathologist</em>
            <p style={{ fontSize: '0.85rem', letterSpacing: '0.1rem' }}>
              Pediatrics • Adults • Therapy • Assessment
            </p>
          </h5>
          <p
            className='about-me-paragraph'
            style={{
              fontFamily: 'Palatino, URW Palladio L, serif',
              fontWeight: 'normal',
              lineHeight: '20pt',
            }}
          >
            I am a Brooklyn-based speech-language pathologist, with a
            decade of experience working with children. After graduating from
            New York University with a bachelor's degree and Syracuse University
            with a master's, I spent most of my career working with individuals
            ages 2-21, with a focus on functional communication, literacy,
            language-learning difficulties, autism, stuttering, as well as
            speech and lanuage delays. I also work with adults - rehabilitating
            speech and language skills after strokes, traumatic brain injury,
            including accent modification and fluency.
            <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <em>Philosophy</em>
              <img
                src='/leafIcon2.png'
                alt='leaf logo'
                width={30}
                height={25}
                style={{ marginLeft: '0.3rem', position: 'absolute'}}
              ></img>
            </p>
            <p>
              I strive to{' '}
              <em>
                <b style={{ color: '#a0522d' }}>empower</b>
              </em>{' '}
              my clients to be{' '}
              <em>
                <b style={{ color: '#a0522d' }}>confident and effective </b>
              </em>
              communicators. Therapy should be motivating, engaging and most
              importantly,
              <em>
                <b style={{ color: '#a0522d' }}> functional.</b>
              </em>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
