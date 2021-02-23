export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div className="progress">
        <div className="current" style={{ width: "60%" }}>
          <span className="current-number">300 xp</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
}
