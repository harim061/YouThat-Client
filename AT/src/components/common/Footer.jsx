import * as F from './FooterStyle';

export default function Footer() {
  return (
    <>
      {' '}
      <F.FTitle>Find your road AT here </F.FTitle>
      <F.Waves
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" 
        preserveAspectRatio="none"
        shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill=" #f39fc9 " />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill=" #f686a7 " />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill=" #ffd0f1" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#efd7f0 " />
        </g>
      </F.Waves>
    </>
  );
}
