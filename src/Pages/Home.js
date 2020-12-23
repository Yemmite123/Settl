import React, { Component } from "react";
import HeroSection from "../components/Home/HeroSection";
import CoreServices from "../components/Home/CoreServices";
import AgentBanking from "../components/Home/AgentBanking";
import SettlWallets from "../components/Home/SettlWallets";
import SettlCard from "../components/Home/SettlCard";
import FeatureCards from "../components/Home/FeatureCards";
import GetUpdate from "../components/Home/GetUpdate";


class App extends Component {

  render() {
    return (
      <div>
          <header>
            <HeroSection/>
            <CoreServices/>
            <AgentBanking/>
            <SettlWallets/>
            <SettlCard/>
            <FeatureCards/>
            <GetUpdate/>
           
          </header>
      </div>
    );
  }
}

export default App;
