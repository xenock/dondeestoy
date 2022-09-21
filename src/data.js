const data = [
  {
    image: "001",
    options: [
      { response: "Muelle de madera. La Ribera", isCorrect: true },
      {
        response: "Pasarela de madera. El Caño de la Culata",
        isCorrect: false,
      },
      { response: "Sendero Río Piedras. El Rompido", isCorrect: false },
    ],
  },
  {
    image: "002",
    options: [
      { response: "Calle Santa María n·74", isCorrect: false },
      { response: "Antigua merceria. Calle Alta", isCorrect: true },
      { response: "Tienda de cosméticos. Calle Lepe", isCorrect: false },
    ],
  },
  {
    image: "003",
    options: [
      { response: "Embalse del Piedras", isCorrect: false },
      { response: "Presa de los Machos", isCorrect: true },
      { response: "Arroyo de la Puntazuela", isCorrect: false },
    ],
  },
  {
    image: "004",
    options: [
      { response: "Calle Andalucía. El Rompido", isCorrect: true },
      { response: "Calle Goleta. El Rompido", isCorrect: false },
      { response: "Calle Fragata. El Rompido", isCorrect: false },
    ],
  },
  {
    image: "005",
    options: [
      { response: "Calle Convento", isCorrect: false },
      { response: "Calle Misericordia", isCorrect: false },
      { response: "Calle Santa María", isCorrect: true },
    ],
  },
  {
    image: "006",
    options: [
      { response: "Oficina Comarcal Agraria", isCorrect: false },
      { response: "Escuela de Empresa", isCorrect: false },
      { response: "Colegio Concepción Arenal ", isCorrect: true },
    ],
  },
  {
    image: "007",
    options: [
      { response: "Plaza Larga", isCorrect: true },
      { response: "Paseo marítimo. El Rompido", isCorrect: false },
      { response: "Entrada al Recinto Ferial", isCorrect: false },
    ],
  },
  {
    image: "008",
    options: [
      { response: "Caño de La Culata", isCorrect: true },
      { response: "Embarcadero La Barca", isCorrect: false },
      { response: "Bajada playa de San Miguel", isCorrect: false },
    ],
  },
  {
    image: "009",
    options: [
      { response: "Cuartillos de La Puntazuela", isCorrect: false },
      { response: "Naves del Recinto Ferial", isCorrect: false },
      { response: "Cuartillos de redes. El Rompido", isCorrect: true },
    ],
  },
  {
    image: "010",
    options: [
      { response: "Lateral centro médico", isCorrect: false },
      { response: "Los funcionarios. bda. Blas Infante", isCorrect: true },
      { response: "Calle Filipinas. Cuartel Guardia Civil", isCorrect: false },
    ],
  },
  {
    image: "011",
    options: [
      { response: "La Pila. camino de la ", isCorrect: false },
      { response: "Fuente de Las Madamas", isCorrect: true },
      { response: "Abrebadero de la pradera de San Isidro", isCorrect: false },
    ],
  },
  {
    image: "012",
    options: [
      { response: "Barreduela de Santa Cruz", isCorrect: true },
      { response: "Plaza de la Fuente Vieja", isCorrect: false },
      { response: "Plaza de Santa Lucia", isCorrect: false },
    ],
  },
  {
    image: "013",
    options: [
      { response: "Entrada del ayuntamiento", isCorrect: true },
      { response: "Casa de la cultura", isCorrect: false },
      { response: "Calle Filipinas. Cuartel guardia civil", isCorrect: false },
    ],
  },
  {
    image: "014",
    options: [
      { response: "Colegio Virgen del Carmen. El Rompido", isCorrect: false },
      { response: "Pistas deportivas. Urverosa", isCorrect: true },
      { response: "Pistas deportivas. Nuevo Portil", isCorrect: false },
    ],
  },
  {
    image: "015",
    options: [
      { response: "Lateral Ermita de Consolación", isCorrect: true },
      { response: "Consultorio médico. El Rompido", isCorrect: false },
      { response: "Centro de mayores y dependientes", isCorrect: false },
    ],
  },
  {
    image: "016",
    options: [
      { response: "Abrebadero de la pradera de San Isidro", isCorrect: false },
      { response: "Pilar de las Madamas", isCorrect: false },
      { response: "Antiguo Camping Catapum ", isCorrect: true },
    ],
  },
  {
    image: "017",
    options: [
      { response: "Antiguo cuartel c/ San Sebastian", isCorrect: true },
      { response: "Mirador flecha de El Rompido", isCorrect: false },
      { response: "Consultorio medico. El Rompido", isCorrect: false },
    ],
  },
  {
    image: "018",
    options: [
      { response: "Sacristía ", isCorrect: false },
      { response: "Placita Chica", isCorrect: true },
      { response: "Antiguo Hotel Encinilla ", isCorrect: false },
    ],
  },
  {
    image: "019",
    options: [
      { response: "Área recreativa Las Palomas", isCorrect: false },
      { response: "Área recreativa Las Cumbres", isCorrect: false },
      { response: "Pradera de San Isidro", isCorrect: true },
    ],
  },
  {
    image: "020",
    options: [
      { response: "Antiguo molino. Calle Gibraleón", isCorrect: false },
      { response: "Convento de La Merced", isCorrect: true },
      { response: "Antiguo molino. Calle Gavia", isCorrect: false },
    ],
  },
  {
    image: "021",
    options: [
      { response: "Plaza de la Fuente Vieja", isCorrect: false },
      { response: "Ermita Cruz de los Milagros", isCorrect: true },
      { response: "Consultorio médico. El Rompido", isCorrect: false },
    ],
  },
  {
    image: "022",
    options: [
      { response: "Guardería Duendes de La Joya", isCorrect: true },
      { response: "Colegio Virgen del Carmen. El Rompido", isCorrect: false },
      { response: "Escuela de empresa", isCorrect: false },
    ],
  },
  {
    image: "023",
    options: [
      { response: "Cruce Calle Alta con Calle del Campo", isCorrect: false },
      { response: "Cruce Calle Moreno con Calle Almendros", isCorrect: true },
      { response: "Cruce Calle Misericordia con Calle Pila", isCorrect: false },
    ],
  },
  {
    image: "024",
    options: [
      { response: "Sendero Ayamonte - Cartaya", isCorrect: false },
      { response: "Llegada al caño de La Rivera", isCorrect: false },
      { response: "Camino de Lancón ", isCorrect: true },
    ],
  },
];
export default data;
