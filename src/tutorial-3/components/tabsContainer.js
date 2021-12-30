export const TabsContainer = (props) => {
  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">{props.children}</div>
      </div>
    </div>
  );
};
