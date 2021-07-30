export default function Tags({ terms, removeTag }) {
  return (
    <>
      {terms.length > 0 && (
        <div className="tags">
          {terms.map((t) => (
            <button
              className="term"
              key={t}
              title={`Remove ${t}`}
              onClick={() => {
                removeTag(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
