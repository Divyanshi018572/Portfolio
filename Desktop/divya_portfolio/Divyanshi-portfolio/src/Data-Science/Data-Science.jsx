import React from "react";
import DataScienceNavbar from "./Data-Science-Navbar/DataScienceNavbar";
import BasicTools from "./Basic-Tools/Basic-Tools";
import FeatureEngineering from "./Feature-Engineering/Feature-Engineering";
import MachineLearning from "./Machine-Learning/Machine-Learning";
import DeepLearning from "./Deep-Learning/Deep-Learning";
import GenerativeAI from "./Generative-AI/Generative-AI";
import ExtraTools from "./Extra-Tools/Extra-Tools";



const DataSciencePage = () => {
  return (
    <div>
      <DataScienceNavbar />
      <BasicTools />
      <FeatureEngineering />
      <MachineLearning />
      <DeepLearning />
      <GenerativeAI />
      <ExtraTools />
      
    </div>
  );
};

export default DataSciencePage;
