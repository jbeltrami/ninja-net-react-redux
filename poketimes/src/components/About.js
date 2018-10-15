import React from 'react';
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className="container">
      <h4 className="center">This is the About Page</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores quisquam laudantium velit ea autem sequi animi neque repudiandae deleniti asperiores, repellat labore omnis sed architecto facere eius aliquam sint!</p>
    </div>
  )
}

export default Rainbow(About)