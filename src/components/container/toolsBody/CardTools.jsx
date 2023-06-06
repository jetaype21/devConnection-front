const CardTools = ({ tools }) => {
  return (
    <article>
      {tools.map(
        (tool, index) =>
          tool.tool_status && <div key={index}>{tool.tool_name}</div>
      )}
    </article>
  );
};
export default CardTools;
