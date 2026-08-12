const canvas = document.getElementById('bg-canvas')

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0x050510, 12, 65)

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 14
let renderer
try {
    renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true})
    if (!renderer.getContext()) throw new Error('no context')
} catch (e) {
    canvas.style.display = 'none'
    document.getElementById('css-bg').style.display = 'block'
}

if (renderer) {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    scene.add(new THREE.AmbientLight(0x00d4ff, 0.3))

    const dl = new THREE.DirectionalLight(0x7b2fff, 1.2)
    dl.position.set(5, 5, 5)
    scene.add(dl)

    const pl1 = new THREE.PointLight(0x00d4ff, 1.2, 60)
    pl1.position.set(-10, 6, 6)
    scene.add(pl1)

    const pl2 = new THREE.PointLight(0xb24bf3, 1.0, 60)
    pl2.position.set(10, -5, 4)
    scene.add(pl2)

    const tc = document.createElement('canvas')
    tc.width = tc.height = 512
    const ctx = tc.getContext('2d')

    ctx.fillStyle = '#060614'
    ctx.fillRect(0, 0, 512, 512)

    ctx.strokeStyle = '#00d4ff'
    ctx.lineWidth = 0.8
    for (let i = 0; i < 512; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 512);
        ctx.stroke()
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(512, i);
        ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(123,47,255,0.38)'
    ctx.lineWidth = 0.5
    for (let d = -512; d < 1024; d += 64) {
        ctx.beginPath();
        ctx.moveTo(d, 0);
        ctx.lineTo(d + 512, 512);
        ctx.stroke()
    }

    const nodes = Array.from({length: 60}, () => ({
        x: Math.random() * 512,
        y: Math.random() * 512
    }))

    ctx.strokeStyle = 'rgba(0,212,255,0.22)'
    ctx.lineWidth = 0.7
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            if (Math.sqrt(dx * dx + dy * dy) < 88) {
                ctx.beginPath()
                ctx.moveTo(nodes[i].x, nodes[i].y)
                ctx.lineTo(nodes[j].x, nodes[j].y)
                ctx.stroke()
            }
        }
    }

    ctx.fillStyle = '#7b2fff'
    nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fill()
    })

    ctx.fillStyle = '#00d4ff'
    nodes.slice(0, 20).forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill()
    })

    const texture = new THREE.CanvasTexture(tc)

    // ----------------------------- shapes ---------------------------
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(2.2, 64, 64),
        new THREE.MeshPhongMaterial({
            map: texture,
            emissive: 0x003344,
            emissiveIntensity: 0.5,
            shininess: 80
        })
    )
    sphere.position.set(-5, 1.5, 0)
    scene.add(sphere)

    const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.9, 0),
        new THREE.MeshBasicMaterial({
            color: 0x7b2fff,
            wireframe: true,
            transparent: true,
            opacity: 0.65
        })
    )
    ico.position.set(5.5, -1.5, -4)
    scene.add(ico)

    const torus = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.44, 18, 120),
        new THREE.MeshPhongMaterial({
            color: 0x00d4ff,
            emissive: 0x005566,
            emissiveIntensity: 0.5,
            shininess: 60
        })
    )
    torus.position.set(4.2, 3.5, -6)
    scene.add(torus)

    const knot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(0.9, 0.28, 100, 16),
        new THREE.MeshPhongMaterial({
            color: 0xb24bf3,
            emissive: 0x330055,
            emissiveIntensity: 0.55,
            shininess: 90
        })
    )
    knot.position.set(-4.5, -3, -3)
    scene.add(knot)

    const octa = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.1),
        new THREE.MeshPhongMaterial({color: 0x00ffcc, emissive: 0x003322, emissiveIntensity: 0.4})
    )
    octa.position.set(0.5, -4.5, -5)
    scene.add(octa)

    const cubes = []
    for (let i = 0; i < 10; i++) {
        const m = new THREE.MeshPhongMaterial({
            color: i % 2 === 0 ? 0x00d4ff : 0xb24bf3,
            emissive: i % 2 === 0 ? 0x001122 : 0x220033,
            emissiveIntensity: 0.4
        })
        const cube = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), m)
        cube.position.set(
            (Math.random() - 0.5) * 22,
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 14 - 4
        )
        cube._phase = Math.random() * Math.PI * 2
        cubes.push(cube)
        scene.add(cube)
    }
    const starGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(1200 * 3)
    for (let i = 0; i < positions.length; i++) positions[i] = (Math.random() - 0.5) * 120
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({color: 0x00d4ff, size: 0.1, transparent: true, opacity: 0.5})
    )
    scene.add(stars)

    let mx = 0, my = 0
    window.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth) * 2 - 1
        my = -(e.clientY / window.innerHeight) * 2 + 1
    })

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    let t = 0

    function tick() {
        requestAnimationFrame(tick)
        t += 0.008

        sphere.rotation.y = t * 0.22
        sphere.rotation.x = t * 0.1
        ico.rotation.x = t * 0.55
        ico.rotation.y = t * 0.33
        torus.rotation.x = t * 0.45
        torus.rotation.y = t * 0.22

        knot.rotation.x = t * 0.38
        knot.rotation.y = t * 0.25
        octa.rotation.x = t * 0.5
        octa.rotation.z = t * 0.3
        cubes.forEach(c => {
            c.rotation.x = t * 0.6 + c._phase
            c.rotation.y = t * 0.4 + c._phase
            c.position.y += Math.sin(t + c._phase) * 0.008
        })
        stars.rotation.y = t * 0.04
        camera.position.x += (mx * 2.5 - camera.position.x) * 0.04
        camera.position.y += (my * 1.5 - camera.position.y) * 0.04
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
    }

    tick()
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
}, {threshold: 0.12})

document.querySelectorAll('.inner').forEach(el => observer.observe(el))