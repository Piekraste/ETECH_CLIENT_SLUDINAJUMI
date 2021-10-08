import ToggleFormField from "../ToggleFormField/ToggleFormField";
import Filter from "../Filter/Filter";

export default function Navigation({ setFilter, setCurrentId, currentId }) {
  return (
    <div className="main__navigation">
      <ToggleFormField setCurrentId={setCurrentId} currentId={currentId} />
      <Filter setFilter={setFilter}></Filter>
    </div>
  );
}
