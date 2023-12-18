const Read = async (props) => {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topics = await res.json();
  return (
    <div>
      <h2>{topics.title}</h2>
      <p>{topics.body}</p>
    </div>
  );
};

export default Read;
