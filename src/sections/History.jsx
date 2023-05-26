import { HistorySlider  } from "components";

const History = ({data}) => {
    
    return (
      <section className="container lg:my-[100px]">
        <HistorySlider items={data} />
      </section>
    );
};

export default History;