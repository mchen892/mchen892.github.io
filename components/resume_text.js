function Resumetext({ position, company, list}) {
  return (
    <main>
      <div>
        <p className="pb-3 text-m pl-3">
          {position} @ <span className="current-span"><strong>{company}</strong></span>
        </p>
      </div>
    </main>
  );
}

export default Resumetext;
