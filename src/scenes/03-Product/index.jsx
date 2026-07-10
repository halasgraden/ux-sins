import { useJourney } from "../../context/JourneyProvider.jsx";
import React from "react";
import {
  LayoutDashboard,
  ChartColumn,
  Users,
  Folders,
  Map,
  Cable,
  Settings,
  Workflow,
  Inbox,
  Activity,
  Bot,
  Landmark,
} from "lucide-react";

export default function Product() {
  const { advance } = useJourney();

  //state
  const [error, setError] = React.useState(false);
  const [errorKey, setErrorKey] = React.useState(0)


  //functions

  function handleErrorClick() {
    setError(false)
    setTimeout(() => setError(true), 10)
    setErrorKey(k => k + 1)
  }

  React.useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      setError(false)
    }, 5000)

    return () => clearTimeout(timer)
  }
}, [error])

  return (
    <main id="product-container">
      <header>
        <img src="/Synergy.svg" alt="Synergy" className="product-logo" />
      </header>

      <section className="sidebar">
        <ul>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <LayoutDashboard size={16} />
            Dashboard
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <ChartColumn size={16} />
            Analytics
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Users size={16} />
            Team
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Folders size={16} />
            Projects
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Map size={16} />
            Roadmap
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Cable size={16} />
            Integrations
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Settings size={16} />
            Settings
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Workflow size={16} />
            Workflows
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Inbox size={16} />
            Inbox
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Activity size={16} />
            Synergy Score
          </li>
          <li
            className="sidebar-link sidebar-coming-soon"
            data-tooltip="Coming Soon"
            onClick={handleErrorClick}
          >
            <Bot size={16} />
            AI Assistant
          </li>
          <li className="sidebar-link manage-subscription" onClick={advance}>
            <Landmark size={12} />
            Manage Subscription
          </li>
        </ul>
      </section>

      <section className="empty-state">
        <h2>The collaborative workspace for modern teams.</h2>
        <p>Nothing here yet...</p>
        <button className="create-project-button" onClick={handleErrorClick}>
          Create first project +
        </button>
      </section>
      {error && (
          <div key={errorKey} className="product-error-message">
            Unable to process your request. Please try again. (ERR_FORM_422)
          </div>
        )}
    </main>
  );
}
