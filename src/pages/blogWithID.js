const blogWithID = () => {
  return <div></div>;
};

export const getServerSideProps = async (context) => {
  const id = context.query;
  try {
    const response = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await response.json();
  } catch (error) {}
};
