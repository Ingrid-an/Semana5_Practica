import styles from './MetricCard.module.css'

/**
 * Muestra los números del refugio. Cada métrica se dibuja con .map().
 *
 * @param {Object} props
 * @param {Array<{ id: string, valor: number, etiqueta: string, icono: string }>} props.metricas
 * @returns {JSX.Element}
 */
function MetricCard({ metricas }) {
  // El valor más alto sirve para calcular el ancho de cada barra
  const maximo = Math.max(...metricas.map((m) => m.valor))

  return (
    <div className={styles.grid}>
      {metricas.map((metrica) => (
        <article key={metrica.id} className={styles.card}>
          <div className={styles.circulo}>
            <span aria-hidden="true">{metrica.icono}</span>
          </div>
          <p className={styles.valor}>{metrica.valor}</p>
          <p className={styles.etiqueta}>{metrica.etiqueta}</p>
          <div className={styles.barra} aria-hidden="true">
            {/* Inline: el ancho depende del dato, no se puede fijar en CSS */}
            <div
              className={styles.relleno}
              style={{ width: `${(metrica.valor / maximo) * 100}%` }}
            />
          </div>
        </article>
      ))}
    </div>
  )
}

export default MetricCard
