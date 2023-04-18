import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main({ data }) {
  return (
    <>
      <section className="mw">
        <MainEvent />
        <MainTopList data={data} />
      </section>
    </>
  );
}

export default Main;
