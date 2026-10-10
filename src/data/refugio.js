// Datos del refugio separados de App.jsx para que App solo orqueste componentes

export const refugio = {
  nombre: 'Refugio de Patitas',
  ciudad: 'Huancayo',
  titulo: 'Dale la bienvenida a tu nuevo mejor amigo',
  mensaje:
    'Nuestro refugio está lleno de animalitos que esperan un hogar para siempre. Esperan a alguien como tú que les dé calor, cariño y cuidado.',
}

export const mascotas = [
  { id: 1, nombre: 'Loki', especie: 'gato', edad: '8 meses', descripcion: 'Curioso y juguetón, le encanta trepar.', estado: 'disponible', foto: '' },
  { id: 2, nombre: 'Sassy', especie: 'gato', edad: '1 año', descripcion: 'Tranquila, ideal para departamento.', estado: 'disponible', foto: '' },
  { id: 3, nombre: 'Cleo y Miso', especie: 'gato', edad: '5 meses', descripcion: 'Hermanitos que deben adoptarse juntos.', estado: 'en proceso', foto: '' },
  { id: 4, nombre: 'Mochi', especie: 'gato', edad: '3 meses', descripcion: 'Pequeña, dulce y muy dormilona.', estado: 'disponible', foto: '' },
  { id: 5, nombre: 'Bailey y Ziggy', especie: 'perro', edad: '2 meses', descripcion: 'Cachorros llenos de energía.', estado: 'en proceso', foto: '' },
  { id: 6, nombre: 'Oreo', especie: 'perro', edad: '2 años', descripcion: 'Leal y sociable con otros perros.', estado: 'disponible', foto: '' },
  { id: 7, nombre: 'Luna', especie: 'perro', edad: '4 meses', descripcion: 'Aprende rápido y ama los paseos.', estado: 'adoptado', foto: '' },
  { id: 8, nombre: 'Milo', especie: 'perro', edad: '6 meses', descripcion: 'Peludito y cariñoso con los niños.', estado: 'disponible', foto: '' },
]

export const metricas = [
  { id: 'gatos', valor: 20, etiqueta: 'Gatos rescatados', icono: '🐱' },
  { id: 'perros', valor: 15, etiqueta: 'Perros rescatados', icono: '🐶' },
  { id: 'adoptados', valor: 19, etiqueta: 'Adopciones', icono: '🏡' },
  { id: 'voluntarios', valor: 12, etiqueta: 'Voluntarios', icono: '🤝' },
]
