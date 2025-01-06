// import React, { useEffect, useRef, useState } from 'react'
// import * as THREE from 'three'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

// const Cube = () => {
//     const meshRef = useRef<THREE.Mesh>(null!)
//     const meshRef2 = useRef<THREE.Mesh>(null!)
//     const [rotation,setRotation] = useState<THREE.Euler>(new THREE.Euler(0,0,0));
//     const [rotation2,setRotation2] = useState<THREE.Euler>(new THREE.Euler(0,0,0));


//         const groupRef = useRef<THREE.Group>(null!)
    

//     useFrame(()=>{
//         if(groupRef.current){
//             groupRef.current.rotation.y +=0.01;
//             groupRef.current.rotation.x += 0.02
//         }
//     })
//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setRotation(prev => new THREE.Euler(prev.x + 1.01, prev.y + 0.01, 0))
//             setRotation2(prev => new THREE.Euler(prev.x + 1.01, prev.y + 0.01, 0))
//         }, 16)
//         return () =>clearInterval(interval)

//     },[])
//     return (
//         <group ref={groupRef}>
//         <mesh ref={meshRef} rotation={rotation} position={[-1,2,3]}>
//             <sphereGeometry args={[5, 30, 30]}/>
//             <meshStandardMaterial    color="lightblue"
//    />  
//         </mesh>
//         <mesh ref={meshRef} rotation={rotation} position={[2,9,3]}>
//             <sphereGeometry args={[5, 30, 30]}/>
//             <meshStandardMaterial    color="red"
//    />  
//         </mesh>

//         <mesh ref={meshRef2} rotation={rotation2} position={[7,2,3]}>
//             <sphereGeometry args={[5, 30, 30]}/>
//             <meshStandardMaterial    color="green"
//    />
            
//         </mesh>
//         <mesh ref={meshRef2} rotation={rotation2} position={[3,-5,3]}>
//             <sphereGeometry args={[5, 30, 30]}/>
//             <meshStandardMaterial    color="darkblue"
//    />
            
//         </mesh>
//         </group>
//     )
// }
// const ThreeDButton = () => {
//   return (
//    <Canvas>
//     <ambientLight intensity={0.5}/>
//     <directionalLight position={[100,0,512]}/>
//     <pointLight position={[10,10,10]}/>
//     <Cube/>
//     <OrbitControls position={[10, 15, 5]}/>
//    </Canvas>
//   )
// }

//  export default ThreeDButton
// // import React, { useRef, useState } from "react";
// // import * as THREE from "three";
// // import { Canvas, useFrame } from "@react-three/fiber";

// // const RandomlyMovingSpheres = () => {
// //   const sphereRefs = useRef<THREE.Mesh[]>([]);

// //   // Initial positions and random directions for spheres
// //   const [spheres, setSpheres] = useState(() =>
// //     Array.from({ length: 4 }, () => ({
// //       position: new THREE.Vector3(
// //         THREE.MathUtils.randFloat(-5, 5),
// //         THREE.MathUtils.randFloat(-5, 5),
// //         0 // Keep movement in 2D (optional)
// //       ),
// //       direction: new THREE.Vector3(
// //         THREE.MathUtils.randFloat(-0.05, 0.05),
// //         THREE.MathUtils.randFloat(-0.05, 0.05),
// //         0 // Keep movement in 2D (optional)
// //       ),
// //     }))
// //   );

// //   useFrame(() => {
// //     setSpheres((prevSpheres) =>
// //       prevSpheres.map(({ position, direction }) => {
// //         const newPos = position.clone().add(direction);

// //         // Bounce back if hitting the boundaries
// //         if (newPos.x > 10 || newPos.x < -10) direction.x *= -1;
// //         if (newPos.y > 10 || newPos.y < -10) direction.y *= -1;

// //         return { position: newPos, direction };
// //       })
// //     );
// //   });

// //   return (
// //     <>
// //       {spheres.map((sphere, index) => (
// //         <mesh
// //           key={index}
// //           ref={(ref) => (sphereRefs.current[index] = ref!)}
// //           position={sphere.position.toArray()} // Convert Vector3 to array
// //         >
// //           <sphereGeometry args={[1, 32, 32]} />
// //           <meshStandardMaterial color={index % 2 === 0 ? "lightblue" : "pink"} />
// //         </mesh>
// //       ))}
// //     </>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <Canvas>
// //       <ambientLight intensity={0.5} />
// //       <pointLight position={[10, 10, 10]} />
// //       <RandomlyMovingSpheres />
// //     </Canvas>
// //   );
// // };

// // export default App;
// // import React, { useEffect, useState } from 'react'
// // import * as THREE from 'three'
// // import { Canvas, useFrame } from '@react-three/fiber'
// // import { OrbitControls } from '@react-three/drei'

// // const Cube = () => {
// //   // State to manage multiple groups dynamically
// //   const [groups, setGroups] = useState<{ position: THREE.Vector3, rotation: THREE.Euler }[]>([])

// //   useEffect(() => {
// //     // Add the initial group to the scene
// //     setGroups([{ position: new THREE.Vector3(0, 0, 0), rotation: new THREE.Euler(0, 0, 0) }])

// //     // Spawn new groups infinitely
// //     const interval = setInterval(() => {
// //       setGroups((prevGroups) => {
// //         // Get the last group
// //         const lastGroup = prevGroups[prevGroups.length - 1]

// //         // Add a new group, slightly moved away from the previous one (along the y-axis)
// //         return [
// //           ...prevGroups,
// //           {
// //             position: new THREE.Vector3(0, lastGroup.position.y - 30 ||lastGroup.position.y -10, 0), // Move the next group along the y-axis
// //             rotation: new THREE.Euler(0, 0, 0),
// //           },
// //         ]
// //       })
// //     }, 2000) // Every 2 seconds, spawn a new group

// //     return () => clearInterval(interval)
// //   }, [])

// //   // Use useFrame to animate all the groups
// //   useFrame(() => {
// //     setGroups((prevGroups) =>
// //       prevGroups.map((group) => ({
// //         ...group,
// //         rotation: new THREE.Euler(group.rotation.x + 0.01, group.rotation.y + 0.01, group.rotation.z), // Rotation animation
// //       }))
// //     )
// //   })

// //   return (
// //     <>
// //       {groups.map((group, index) => (
// //         <group key={index} position={group.position} rotation={group.rotation}>
// //           {/* Sphere 1 */}
// //           <mesh position={[-1, 2, 3]}>
// //             <sphereGeometry args={[5, 30, 30]} />
// //             <meshStandardMaterial color="lightblue" />
// //           </mesh>

// //           {/* Sphere 2 */}
// //           <mesh position={[2, 9, 3]}>
// //             <sphereGeometry args={[5, 30, 30]} />
// //             <meshStandardMaterial color="red" />
// //           </mesh>

// //           {/* Sphere 3 */}
// //           <mesh position={[7, 2, 3]}>
// //             <sphereGeometry args={[5, 30, 30]} />
// //             <meshStandardMaterial color="green" />
// //           </mesh>

// //           {/* Sphere 4 */}
// //           <mesh position={[3, -5, 3]}>
// //             <sphereGeometry args={[5, 30, 30]} />
// //             <meshStandardMaterial color="darkblue" />
// //           </mesh>
// //         </group>
// //       ))}
// //     </>
// //   )
// // }

// // const ThreeDButton = () => {
// //   return (
// //     <Canvas>
// //       <ambientLight intensity={0.5} />
// //       <directionalLight position={[100, 0, 512]} />
// //       <pointLight position={[10, 10, 10]} />
// //       <Cube />
// //       <OrbitControls />
// //     </Canvas>
// //   )
// // }

// // export default ThreeDButton



import React, { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Cube = () => {
  const [groups, setGroups] = useState<{ position: THREE.Vector3, rotation: THREE.Euler }[]>([])

  const generateRandomPosition = () => {
    return new THREE.Vector3(
      Math.random() * 100-10,  
      Math.random() * 150-20,  
      Math.random() * 200-40   
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGroups((prevGroups) => {
        return [
          ...prevGroups,
          {
            position: generateRandomPosition(),
            rotation: new THREE.Euler(0, 0, 0), 
          },
        ]
      })
    }, 10)

    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    setGroups((prevGroups) =>
      prevGroups.map((group) => ({
        ...group,
        rotation: new THREE.Euler(group.rotation.x + 0.01, group.rotation.y + 0.01, group.rotation.z),
      }))
    )
  })

  return (
    <>
      {groups.map((group, index) => (
        <group key={index} position={group.position} rotation={group.rotation}>
          <mesh position={[-1, 2, 3]}>
            <sphereGeometry args={[5, 30, 30]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>

          <mesh position={[2, 9, 3]}>
            <sphereGeometry args={[5, 30, 30]} />
            <meshStandardMaterial color="red" />
          </mesh>

          <mesh position={[7, 2, 3]}>
            <sphereGeometry args={[5, 30, 30]} />
            <meshStandardMaterial color="green" />
          </mesh>

          <mesh position={[3, -5, 3]}>
            <sphereGeometry args={[5, 30, 30]} />
            <meshStandardMaterial color="darkblue" />
          </mesh>
        </group>
      ))}
    </>
  )
}

const ThreeDButton = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[100, 0, 512]} />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  )
}

export default ThreeDButton
