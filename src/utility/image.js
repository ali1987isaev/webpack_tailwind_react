import React from 'react'

export default function Image({sm, lg, imageClasses}) {
  return (
    <picture>
      <source
        media="(max-width: 768px)"
        srcSet={`${sm} 768w`}
        sizes="768px"
      />
      <source
        srcSet={`${lg} 1280w`}
        sizes="1280px"
      />
      <img loading='lazy' className={imageClasses} src={lg} />
    </picture>
  );
}
