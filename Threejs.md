Three JS is a heavy JavaScript library that allows developers to create and display animated 3D graphics within a web browser.
There are three things in the threee js:
1. Scene: Scene are the things that are visible in the screen.
2. Camera
3. Renderer which render the whole scene

   Roadmaps:
1. Start with small try orbit controls to move around
2. Learn GLTF, UltrHDRLoader

   IN Three JS Canvas act as a container for all threejs scenes and all its objects.
   OrbitalControls provides the camers controls for user interaction with 3D scenes.
    # Mesh
   Mesh is a fundamental object that represenys a 3D object in scene
   It is the combination of two things:
   1. Geometry: Geometru us the shape of the object like cube sphere
   2.  Material: Matrerial is the properties of the object such as color, texture, and how it reaches to the light.
: Mesh combines the geometry and material and renders a visible object in the 3D scenes.
It reacts with different types of  light like ambient light directional light to show how it reflects and creates shadow.
It can be transformed into 3D space(moved, rotated, scaled)

------------------------------------------------------------ 
| <mesh ref={meshRef} rotation={rotation}>                  |
| <boxGeometry args={[1, 1, 1]} />                          |    
|  <meshStandardMaterial color="royalblue" />               |  
| </mesh>                                                   |
|------------------------------------------------------------

In this code mesh creates the object in the scene. It represents the actual 3D objects 
ref={mashref} This ataches the references to the mesh which we can use to manipulate the object screen directly. 
rotation={rotation}: This applies the rotation to the mesh which is controlled by the state rotation making cube spin automatically.
<boxGeometry args = {[1,1,1]} />: This line defines the geometry of the mesh. In this case, It's a box  which sides  of length 1 in all directions.we can also use sphereGeometry, coneGeometry etc.
<MeshStandardMaterial color ="blue"/> this appliws material to mesh determining how it looks.
