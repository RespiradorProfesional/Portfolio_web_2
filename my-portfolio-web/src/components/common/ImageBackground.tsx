const ImageBackground = ({}) => {
  return (
    <div
      className="absolute left-1/2 top-80 transform -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-cover bg-center opacity-50 z-0"
      style={{
        backgroundImage: "url('/background_images/background_ball.png')",
      }}
    ></div>
  );
};

export default ImageBackground;
