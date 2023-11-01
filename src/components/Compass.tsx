import React from 'react';

interface CompassProps {
    windDir: string;
    windSpd: number;
}

const Compass: React.FC<CompassProps> = ({ windDir, windSpd }) => {
    return (
        <div className="compass">
            <div className="direction">
                <p>
                    {windDir}
                    <span>{windSpd} km</span>
                </p>
            </div>
            <div className={`arrow ${windDir?.toLowerCase()}`}></div>
        </div>
    );
};

export default Compass;