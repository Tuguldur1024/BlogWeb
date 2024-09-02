const NewsButton = (props) => {
  const { textColor, category, isContained } = props;
  // const bgColor = isContained ? "[#4B6BFB]" : "[rgba(75, 107, 251, 0.05)]";
  // const className = "bg-" + bgColor;
  return (
    <button className="px-2.5 py-1 bg-blue-500 bg-opacity-5	w-fit">
      <p color={textColor} className="font-medium text-sm text-blue-500	">
        {category}
      </p>
    </button>
  );
};
export default NewsButton;
