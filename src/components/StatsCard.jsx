function StatsCard({ title, value }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 text-center p-3">
      <h3 className="text-primary fw-bold">{value}</h3>
      <p className="mb-0 text-muted">{title}</p>
    </div>
  );
}

export default StatsCard;