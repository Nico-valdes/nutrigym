export const rutinas = [
    {
      nombre: 'Rutina 1',
      color: 'bg-red-100',
      dias: [
        {
          dia: 'Lunes',
          ejercicios: ['Press de banca', 'Sentadillas', 'Peso muerto']
        },
        {
          dia: 'Miércoles',
          ejercicios: ['Press militar', 'Dominadas', 'Remo con barra']
        },
        {
          dia: 'Viernes',
          ejercicios: ['Curl de bíceps', 'Extensiones de tríceps', 'Elevaciones laterales']
        }
      ]
    },
    {
      nombre: 'Rutina 2',
      color: 'bg-blue-100',
      dias: [
        {
          dia: 'Martes',
          ejercicios: ['Press inclinado', 'Zancadas', 'Peso muerto rumano']
        },
        {
          dia: 'Jueves',
          ejercicios: ['Press de hombros', 'Pull-ups', 'Remo con mancuernas']
        },
        {
          dia: 'Sábado',
          ejercicios: ['Curl de martillo', 'Fondos', 'Elevaciones frontales']
        }
      ]
    },
    {
      nombre: 'Rutina Compleja',
      color: 'bg-green-100',
      dias: [
        {
          dia: 'Lunes',
          ejercicios: [
            { nombre: 'Press de banca', series: 4, repeticiones: 8, rir: 2, descanso: '2 min' },
            { nombre: 'Sentadillas', series: 4, repeticiones: 10, rir: 1, descanso: '2 min' },
            { nombre: 'Peso muerto', series: 3, repeticiones: 6, rir: 2, descanso: '3 min' }
          ]
        },
        {
          dia: 'Miércoles',
          ejercicios: [
            { nombre: 'Press militar', series: 4, repeticiones: 8, rir: 2, descanso: '2 min' },
            { nombre: 'Dominadas', series: 4, repeticiones: 10, rir: 1, descanso: '2 min' },
            { nombre: 'Remo con barra', series: 3, repeticiones: 8, rir: 2, descanso: '2 min' }
          ]
        },
        {
          dia: 'Viernes',
          ejercicios: [
            { nombre: 'Curl de bíceps', series: 4, repeticiones: 12, rir: 1, descanso: '1.5 min' },
            { nombre: 'Extensiones de tríceps', series: 4, repeticiones: 12, rir: 1, descanso: '1.5 min' },
            { nombre: 'Elevaciones laterales', series: 3, repeticiones: 15, rir: 2, descanso: '1 min' }
          ]
        }
      ]
    }
  ];