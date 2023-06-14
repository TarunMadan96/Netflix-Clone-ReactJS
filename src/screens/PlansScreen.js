import React from "react";
import "./PlansScreen.css";

function PlanScreen() {
  return (
    <div className="plansScreen_plans">
      <div className="plansScreen_plan1">
        <div className="plansScreen_info1">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen_plan2">
        <div className="plansScreen_info2">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen_plan3">
        <div className="plansScreen_info3">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlanScreen;
