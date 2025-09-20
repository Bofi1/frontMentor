function Main(props) {
  return (
    <main
      className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3"
      id="extensions-list"
    >
      {props.children}
    </main>
  );
}

export default Main;
