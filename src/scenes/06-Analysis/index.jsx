import React from "react"
import data from "../../data/sins.js"
import Sin from "../../components/Sin.jsx"

export default function Analysis() {
  const [groupBy, setGroupBy] = React.useState("scene")

  function groupSins(sins, mode) {
    return sins.reduce((groups, sin) => {
      const key = mode === "scene" ? `Scene ${sin.scene}` : sin.category
      if (!groups[key]) groups[key] = []
      groups[key].push(sin)
      return groups
    }, {})
  }

  const grouped = groupSins(data, groupBy)

  const groupedElements = Object.entries(grouped).map(([groupName, sins]) => (
    <section key={groupName} className="analysis-group">
      <h2 className="analysis-group-title">{groupName}</h2>
      <div className="analysis-sins">
        {sins.map((sin, index) => (
          <Sin key={sin.id} {...sin} defaultOpen={index === 0 && groupName === "Scene 1"} />
        ))}
      </div>
    </section>
  ))

  return (
    <main className="analysis-main">
      <header className="analysis-header">
        <h1>UX Sins Analysis</h1>
        <div className="group-toggle">
          <button
            className={groupBy === "scene" ? "active" : ""}
            onClick={() => setGroupBy("scene")}
          >
            By Scene
          </button>
          <button
            className={groupBy === "category" ? "active" : ""}
            onClick={() => setGroupBy("category")}
          >
            By Category
          </button>
        </div>
      </header>
      <div className="analysis-content">
        {groupedElements}
      </div>
    </main>
  )
}
