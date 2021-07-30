export default function Tags({ terms }) {
  return (
    <>
      {terms.length > 0 && (
        <div className="tags">
          {terms.map((t) => (
            <button className="term" key={t}>
              {t}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
