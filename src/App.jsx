import DashboardShelter from './components/DashboardShelter.jsx'
import PetCard from './components/PetCard.jsx'
import MetricCard from './components/MetricCard.jsx'
import CsrInfo from './components/CsrInfo.jsx'
import { refugio, mascotas, metricas } from './data/refugio.js'

/**
 * Componente raíz. Solo orquesta: importa los datos y los entrega
 * a los componentes hijos por props. No tiene estado ni lógica de negocio.
 */
function App() {
  return (
    <DashboardShelter refugio={refugio}>
      {/* Todo lo que va aquí dentro llega a DashboardShelter como props.children */}
      <section id="mascotas" className="seccion">
        <h2 className="seccion-titulo">Estas almitas te están esperando</h2>
        <p className="seccion-subtitulo">Conoce a cada una y su historia.</p>
        <PetCard mascotas={mascotas} />
      </section>

      <section id="numeros" className="seccion seccion-crema">
        <h2 className="seccion-titulo">Nuestro camino en números</h2>
        <MetricCard metricas={metricas} />
      </section>

      <section id="csr" className="seccion">
        <h2 className="seccion-titulo">¿Cómo se renderiza esta página?</h2>
        <CsrInfo />
      </section>
    </DashboardShelter>
  )
}

export default App
