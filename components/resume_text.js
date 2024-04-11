function Resumetext({ position, company, list}) {
  return (
    <main>
      <div>
        <p className="pb-3 text-m lg:pl-64 lg:text-l">
          {position} @ <span className="current-span"><strong>{company}</strong></span>
        </p>
      </div>
    </main>
  );
}

export default Resumetext;
