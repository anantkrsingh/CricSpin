import React, { useState, useEffect } from 'react';
import { Stage, Layer, Circle } from 'react-konva';

const CircleOverlay = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const animation = requestAnimationFrame(() => {
      setRotationAngle((prevAngle) => prevAngle + .3);
    });

    return () => cancelAnimationFrame(animation);
  }, [rotationAngle]);

  return (
    <Stage width={160} height={103}>
      <Layer>

        <Circle
          x={80}
          y={51.5}
          radius={50}
          stroke="#0093E9"
          strokeWidth={3}
          dash={[3, 3]}
          fill="#80D0C7" // Background color
          opacity={1}
          rotation={rotationAngle}
        />
      </Layer>
    </Stage>
  );
};

export default CircleOverlay;
