import React from 'react';
import Antigravity from './Antigravity';
import './AntigravityEffect.css';

function AntigravityEffect() {
    return (
        <div className="antigravity-container">
            <Antigravity
                count={300}
                magnetRadius={6}
                ringRadius={7}
                waveSpeed={0.4}
                waveAmplitude={1}
                particleSize={0.67}
                lerpSpeed={0.05}
                color="#000000"
                autoAnimate={false}
                particleVariance={1}
                rotationSpeed={0}
                depthFactor={1}
                pulseSpeed={3}
                particleShape="box"
                fieldStrength={10}
            />
        </div>
    );
}

export default AntigravityEffect;