import React, { useRef } from 'react';

const Map = () => {
  const ref = useRef();

  return (
    <div className="map" ref={ref}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.4493323410318!2d-122.33507929781949!3d47.62669499361571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490153a4d2dafff%3A0x4069d1d838a8caf8!2sDaniel&#39;s%20Broiler%20-%20South%20Lake%20Union!5e0!3m2!1spl!2spl!4v1636282998848!5m2!1spl!2spl"
        title="map"
        className="map__frame"
        style={{ border: '0' }}
        loading="lazy"
      />
    </div>
  );
};

export default Map;
