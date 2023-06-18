export default function States({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! ready to go ✈"
          : `👜You have ${numItem} items in your list, and you already packed ${" "}
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
