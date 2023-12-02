function Container({ title, children }) {
  return (
    <div className="wrapper">
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default Container;
