const Button = (props) => {
  return (
    <div className="bg-blue-600 w-fit py-1 rounded-md px-2.5 font-medium text-sm text-white">
      {props.text}
    </div>
  );
};
export default Button;
