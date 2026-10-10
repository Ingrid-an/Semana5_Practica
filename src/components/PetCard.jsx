import styles from './PetCard.module.css'

// Colores según el estado: valores condicionales -> estilos inline
const COLORES_ESTADO = {
  disponible: { fondo: '#e3f1e0', texto: '#2f6b3a' },
  'en proceso': { fondo: '#fdecc8', texto: '#8a5a12' },
  adoptado: { fondo: '#ece4dc', texto: '#6b5a4c' },
}

// Fondo del "retrato" según la especie (también condicional)
const FONDO_ESPECIE = {
  gato: 'linear-gradient(160deg, #fbe3b0, #f3c98b)',
  perro: 'linear-gradient(160deg, #f6d9c2, #e5b48f)',
}

/**
 * Renderiza una tarjeta por cada mascota del arreglo recibido.
 *
 * @param {Object} props
 * @param {Array<{
 *   id: number,
 *   nombre: string,
 *   especie: 'gato' | 'perro',
 *   edad: string,
 *   descripcion: string,
 *   estado: 'disponible' | 'en proceso' | 'adoptado',
 *   foto?: string
 * }>} props.mascotas - Lista de mascotas del refugio
 * @returns {JSX.Element}
 */
function PetCard({ mascotas }) {
  return (
    <div className={styles.grid}>
      {/* .map() con key única y estable: el id de cada mascota */}
      {mascotas.map((mascota) => {
        const color = COLORES_ESTADO[mascota.estado]
        const adoptado = mascota.estado === 'adoptado'

        return (
          <article
            key={mascota.id}
            className={styles.card}
            // Inline: solo para un valor que depende de los datos
            style={{ opacity: adoptado ? 0.7 : 1 }}
          >
            <div
              className={styles.retrato}
              style={{ background: FONDO_ESPECIE[mascota.especie] }}
            >
              {/* Si hay foto la mostramos; si no, un emoji según la especie */}
              {mascota.foto ? (
                <img src={mascota.foto} alt={`Foto de ${mascota.nombre}`} className={styles.foto} />
              ) : (
                <span className={styles.emoji} role="img" aria-label={mascota.especie}>
                  {mascota.especie === 'gato' ? '🐱' : '🐶'}
                </span>
              )}
            </div>

            <div className={styles.cuerpo}>
              <h3 className={styles.nombre}>{mascota.nombre}</h3>
              <p className={styles.edad}>{mascota.edad}</p>
              <p className={styles.descripcion}>{mascota.descripcion}</p>
              <span
                className={styles.estado}
                style={{ backgroundColor: color.fondo, color: color.texto }}
              >
                {mascota.estado}
              </span>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default PetCard
