const NewsButton = (props) => {
  const { textColor, category, isContained } = props;
  const bgColor = isContained ? "[#4B6BFB]" : "[rgba(75, 107, 251, 0.05)]";
  const className = "bg-" + bgColor;
  return (
    <button className={className}>
      <p color={textColor} className="font-medium text-sm">
        {" "}
        {category}{" "}
      </p>
    </button>
  );
};
export default NewsButton;
