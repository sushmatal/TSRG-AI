import React from 'react';
import AboutHero from '../components/AboutHero';
import BackboneNarrative from '../components/BackboneNarrative';
import ValuePillars from '../components/ValuePillars';
import TSRGFramework from '../components/TSRGFramework';
import LogicModel from '../components/LogicModel';

const AboutPage = () => {
    return (
        <div className="pt-20">
            <AboutHero />
            <BackboneNarrative />
            <TSRGFramework />
            <ValuePillars />
            <LogicModel />
        </div>
    );
};

export default AboutPage;
