import React from 'react'

function Resume() {
  const imageName = 'HaticeAK.pdf';
  const logoPath = `${process.env.PUBLIC_URL}/${imageName}`;
  return (
    <div>
       <iframe
        src={logoPath}
        style={{ width: '100%', height: '800px' }}
        title="Resume"
      />
      
    </div>
  )
}

export default Resume
