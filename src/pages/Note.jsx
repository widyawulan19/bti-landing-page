const [play, setPlay] = useState(false);

return (
  <div>
    {!play ? (
      <img 
        src="/thumbnail.jpg" 
        onClick={() => setPlay(true)}
        style={{ cursor: "pointer", width: "100%" }}
      />
    ) : (
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
        allow="autoplay"
      />
    )}
  </div>
);