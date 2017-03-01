import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Home = () => (
  <div>
    <img className="home-page-image" src="aboutPuppy.png" />
    <h1>Welcome To VYNL</h1>
    <p>
      Vinyl. An experience that encloses you in its warm, organic soundscape. Surrender yourself to the delights of analog
      sound and forsake the fool’s gold standard of digital audio.
    </p>
    <p>
      VYNL offers a hand-curated, truly esoteric selection of artists on the format they were intended to be appreciated -
      the vinyl record. Allow us to be your personal sommelier of sound. Trust us to deliver you the best in music before it
      becomes tainted by the Mainstream.
    </p>
    <p>
      Don’t hesitate. VYNL.
    </p>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
