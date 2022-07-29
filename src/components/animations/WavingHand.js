import React from "react";
import wavingimg from "../../assets/images/wavingHand.png";

function WavingHand() {
  return (
    <div className="animate-wavingHand origin-top-3/4-3/4 flex justify-center h-8 w-8">
      <img src={wavingimg} alt="waving" />
    </div>
  );
}

export default WavingHand;
