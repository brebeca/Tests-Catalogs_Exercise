function Student({ name, number }) {
  return (
    <section>
      <div className="closed">
        <h4>
          {number}. {name}
        </h4>
      </div>
    </section>
  );
}
export default Student;
