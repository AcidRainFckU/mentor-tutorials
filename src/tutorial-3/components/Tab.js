import React from "react";

export const Tab = ({ onClick, currentTab, title, tabId, description }) => {
  const [visible, setVisible] = React.useState(false);

  const openTab = () => {
    setVisible((visible) => !visible);
    onClick(tabId);
  };

  React.useEffect(() => {
    setVisible(false);
    if (currentTab === tabId) {
      setVisible(true);
    }
  }, [currentTab]);

  return (
    <div className={visible ? "tab active" : "tab"}>
      <input id="tab-four" type="checkbox" name="tabs" />
      <label onClick={openTab} htmlFor="tab-four">
        {title}
      </label>
      <div className="tab-content">
        <p>{description}</p>
      </div>
    </div>
  );
};
