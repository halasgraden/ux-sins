import { useJourney } from "../../context/JourneyProvider.jsx";
import data from "../../data/sins.js";
import "../../components/Sin.jsx";

export default function Analysis() {
  const sinElements = data.map((sin) => {
    return (
      <Sin
        name={sin.name}
        scene={sin.scene}
        longDescription={sin.longDescription}
        category={sin.category}
        fix={sin.fix}
        principle={sin.principle}
        reference={sin.reference}
      />
    );
  });

  return (
    <main>
      <h1>UX Sins Analysis</h1>
      {sinElements}
    </main>
  );
}
