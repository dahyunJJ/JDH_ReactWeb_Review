import MainBanner from "./MainBanner";
import MainList from "./MainList";

function Main({ data }) {
  return (
    <section className="Main">
      <MainBanner />
      <MainList data={data} />
    </section>
  );
}

export default Main;
