import * as THREE from 'three';
import * as CANNON from 'cannon';
import { boxHeight, originalBoxSize } from './helpers';




export const addLayer = ({ x, z, width, depth, direction, stack, setStack, scene, world }) => {
    const y = boxHeight * stack.length; // Add the new box one layer higher
    const layer = generateBox({ x, y, z, width, depth, falls: false, stack, scene, world });
    layer.direction = direction;
    setStack(prev => ([...prev, layer]));
};

export const generateBox = ({ x, y, z, width, depth, falls, stack, scene, world }) => {
    // ThreeJS
    const geometry = new THREE.BoxGeometry(width, boxHeight, depth);
    const color = new THREE.Color(`hsl(${30 + stack.length * 4}, 100%, 50%)`);
    const material = new THREE.MeshLambertMaterial({ color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);

    // CannonJS
    const shape = new CANNON.Box(
        new CANNON.Vec3(width / 2, boxHeight / 2, depth / 2)
    );
    let mass = falls ? 5 : 0; // If it shouldn't fall then setting the mass to zero will keep it stationary
    mass *= width / originalBoxSize; // Reduce mass proportionately by size
    mass *= depth / originalBoxSize; // Reduce mass proportionately by size
    const body = new CANNON.Body({ mass, shape });
    body.position.set(x, y, z);
    world.addBody(body);

    return {
        threejs: mesh,
        cannonjs: body,
        width,
        depth
    };
};





