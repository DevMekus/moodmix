import ArtistCard from "@/components/ArtistCard";

const RightPanel = () => {
  return (
    <>
      <div className="right-panel">
        <h5 className="bold">Artists</h5>
        <div className="display">
          <ArtistCard />
        </div>
      </div>
    </>
  );
};

export default RightPanel;
