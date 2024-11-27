import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <ul data-cy="TabsComponent">
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': activeTab.id === tab.id })}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== activeTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      {tabs.map(
        tab =>
          activeTab.id === tab.id && (
            <div key={tab.id} className="block" data-cy="TabContent">
              {tab.content}
            </div>
          ),
      )}
    </>
  );
};
