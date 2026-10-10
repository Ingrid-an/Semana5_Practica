import styles from './DashboardShelter.module.css'

/**
 * Contenedor principal del refugio: navegación, bienvenida y pie de página.
 * El contenido central es dinámico y llega por props.children.
 *
 * @param {Object} props
 * @param {{ nombre: string, ciudad: string, titulo: string, mensaje: string }} props.refugio - Datos del refugio
 * @param {React.ReactNode} props.children - Secciones anidadas que se muestran en el centro
 * @returns {JSX.Element}
 */
function DashboardShelter({ refugio, children }) {
  const acciones = [
    { id: 'adoptar', icono: '🐾', texto: 'Adoptar', href: '#mascotas' },
    { id: 'voluntario', icono: '🤝', texto: 'Ser voluntario', href: '#contacto' },
    { id: 'donar', icono: '💛', texto: 'Donar', href: '#contacto' },
  ]

  return (
    <div className={styles.shell}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Navegación principal">
          <a href="#inicio" className={styles.logo}>
            <span aria-hidden="true">🐾</span> {refugio.nombre}
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#mascotas">Mascotas</a></li>
            <li><a href="#numeros">Números</a></li>
            <li><a href="#csr">CSR</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div id="inicio" className={styles.heroContenido}>
          <div className={styles.heroTexto}>
            <h1>{refugio.titulo}</h1>
            <p>{refugio.mensaje}</p>
            <a href="#mascotas" className={styles.boton}>Adoptar una mascota</a>
          </div>
          <div className={styles.heroIlustracion} aria-hidden="true">
            <span className={styles.heroHuella}>🐾</span>
            <span className={styles.heroMascota}>🐈</span>
          </div>
        </div>
      </header>

      <div className={styles.acciones}>
        {acciones.map((accion) => (
          <a key={accion.id} href={accion.href} className={styles.accion}>
            <span className={styles.accionIcono} aria-hidden="true">{accion.icono}</span>
            {accion.texto}
          </a>
        ))}
      </div>

      {/* Aquí React coloca lo que App.jsx anidó dentro de <DashboardShelter> */}
      <main className={styles.contenido}>{children}</main>

      <footer id="contacto" className={styles.footer}>
        <div className={styles.footerGrid}>
          <div>
            <p className={styles.footerMarca}>
              <span aria-hidden="true">🐾</span> {refugio.nombre}
            </p>
            <p>Jr. Las Patitas 123, {refugio.ciudad}</p>
          </div>
          <div>
            <h3>Contacto</h3>
            <p>hola@refugiodepatitas.pe</p>
            <p>964 000 000</p>
          </div>
          <div>
            <h3>Síguenos</h3>
            <p>Facebook · Instagram · TikTok</p>
          </div>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {refugio.nombre}. Laboratorio Semana 05 · UNCP
        </p>
      </footer>
    </div>
  )
}

export default DashboardShelter
