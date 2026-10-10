import styles from './CsrInfo.module.css'

/**
 * Sección informativa sobre Client-Side Rendering (Paso 5 de la guía).
 * No recibe props: su contenido es fijo.
 *
 * @returns {JSX.Element}
 */
function CsrInfo() {
  const pasos = [
    { id: 1, titulo: 'El servidor envía un HTML casi vacío', texto: 'Solo trae las meta tags, el <div id="root"></div> y el <script> de main.jsx.' },
    { id: 2, titulo: 'El navegador descarga el JavaScript', texto: 'Vite empaqueta React y nuestros componentes en archivos JS (chunks).' },
    { id: 3, titulo: 'React construye el DOM en el navegador', texto: 'createRoot(...).render(<App />) inyecta todas las secciones dentro de #root.' },
  ]

  return (
    <div className={styles.contenedor}>
      <p className={styles.intro}>
        Esta página usa <strong>Client-Side Rendering (CSR)</strong>: el HTML no llega
        armado desde el servidor, sino que React lo construye en tu navegador.
      </p>

      <ol className={styles.pasos}>
        {pasos.map((paso) => (
          <li key={paso.id} className={styles.paso}>
            <span className={styles.numero}>{paso.id}</span>
            <div>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.comparacion}>
        <div>
          <h3>Ver código fuente (Ctrl + U)</h3>
          <pre className={styles.codigo}>{`<body>
  <div id="root"></div>
  <script type="module"
    src="/src/main.jsx"></script>
</body>`}</pre>
          <p className={styles.nota}>Así llega del servidor: #root está vacío.</p>
        </div>
        <div>
          <h3>Inspeccionar elemento (F12)</h3>
          <pre className={styles.codigo}>{`<div id="root">
  <div class="_shell_a1b2c">
    <header class="_hero_d3e4f">...
    <main>...PetCard, MetricCard...
    <footer>...
  </div>
</div>`}</pre>
          <p className={styles.nota}>Así queda después de que React se ejecuta.</p>
        </div>
      </div>

      <details className={styles.detalle}>
        <summary>¿Por qué las meta tags van en index.html y no en JSX?</summary>
        <p>
          El navegador lee <code>&lt;meta name="viewport"&gt;</code> antes de pintar la página,
          y muchos buscadores solo leen el HTML inicial. Si esas etiquetas estuvieran en JSX,
          no existirían hasta que React termine de ejecutarse, y la página podría verse mal
          en celulares o no aparecer bien en Google.
        </p>
      </details>

      <details className={styles.detalle}>
        <summary>¿Por qué los nombres de clase se ven raros?</summary>
        <p>
          Son los CSS Modules: Vite convierte <code>styles.card</code> en algo como{' '}
          <code>_card_x7k2a</code>. Así dos componentes pueden usar <code>.card</code> sin
          pisarse los estilos.
        </p>
      </details>
    </div>
  )
}

export default CsrInfo
