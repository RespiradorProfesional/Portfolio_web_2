
const TransitionColor = ({ flip_v }:{flip_v : boolean}) => {

  return (
  <div
    className={`bg-gradient-to-t from-background-2 to-transparent h-48 w-full ${
      flip_v ? "scale-y-[-1]" : ""
    }`}
  ></div>
  );
};

export default TransitionColor;
