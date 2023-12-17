import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

const CameraRig = ( { children }) => {
  const group = useRef();
  


  return (
    <group>{children}</group>
  )
}

export default CameraRig