import { Component, AfterViewInit} from '@angular/core';
import {  HammerModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements AfterViewInit {


  ngAfterViewInit(): void {
  /*   if (typeof window !== "undefined") {
   
    const width = window.innerWidth, height = window.innerHeight;



    // Crear la cámara
    const camera = new THREE.PerspectiveCamera( 10, width / height, 0.01, 1000 );
    camera.position.z = 400;
    camera.position.x = 0;
    camera.position.y = 0;
  
    
// Crear la escena
    const scene = new THREE.Scene();
    //0x040d21
    scene.background = new THREE.Color(0x040d21);

     // Añadir niebla a la escena
     scene.fog = new THREE.Fog(0x535ef3, 400, 800);


    // Añadir la luz ambiental  X
    const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
    scene.add(ambientLight);
    
    // Añadir luces direccionales
    const dLight1 = new THREE.DirectionalLight(0xffffff, 1);
    dLight1.position.set(-3, 3, 10);
    scene.add(dLight1);

     const dLight2 = new THREE.DirectionalLight(0x7982f6, 3);
    dLight2.position.set(-200, 500, 200);
    scene.add(dLight2);

    const dLight3 = new THREE.DirectionalLight(0x8566cc, 2);
    dLight3.position.set(-4, 6, 5);
    scene.add(dLight3);
     

    // Crear la geometría de la esfera
    const geometry = new THREE.SphereGeometry(15, 32, 16);

    // Crear el material de la esfera
    const material = new THREE.MeshPhongMaterial({
      color: 0x3a228a,
      emissive: 0x220038,
      emissiveIntensity: 0.1,
      shininess: 0.7
    });
    // Crear la malla de la esfera con la geometría y el material
    const mesh = new THREE.Mesh(geometry, material);

    // Rotar la esfera en los ejes Y y X
    mesh.rotation.y = -Math.PI * (5 / 2);
    mesh.rotation.x = -Math.PI / 6;
    
    // Añadir la malla de la esfera a la escena
    scene.add(mesh);

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild( renderer.domElement );
    renderer.shadowMap.enabled = true; // Habilitar el mapeo de sombras en el renderizador

    renderer.setAnimationLoop( animate );
    
    // animation
    
    function animate( time:number ) {
    
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      mesh.rotation.z += 0.01;
  
      renderer.render( scene, camera );
    
    }

    //Resize
    function onWindowResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    window.addEventListener('resize', onWindowResize, false);

  } */
  }
}
