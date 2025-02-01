
export default function RutinaGaston() {
const routine = [
    {
      day: "Monday",
      focus: "Chest and Triceps",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
        { name: "Tricep Pushdowns", sets: 3, reps: "12-15" },
        { name: "Dips", sets: 3, reps: "To failure" },
      ],
    },
    {
      day: "Tuesday",
      focus: "Back and Biceps",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: "6-8" },
        { name: "Pull-ups", sets: 3, reps: "To failure" },
        { name: "Barbell Rows", sets: 3, reps: "8-10" },
        { name: "Hammer Curls", sets: 3, reps: "10-12" },
      ],
    },
    {
      day: "Wednesday",
      focus: "Rest Day",
      exercises: [
        { name: "Light Cardio (optional)", sets: 1, reps: "20-30 min" },
        { name: "Stretching", sets: 1, reps: "15-20 min" },
      ],
    },
    {
      day: "Thursday",
      focus: "Legs and Shoulders",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10" },
        { name: "Leg Press", sets: 3, reps: "10-12" },
        { name: "Military Press", sets: 3, reps: "8-10" },
        { name: "Lateral Raises", sets: 3, reps: "12-15" },
      ],
    },
    {
      day: "Friday",
      focus: "Full Body",
      exercises: [
        { name: "Barbell Lunges", sets: 3, reps: "10 each leg" },
        { name: "Push-ups", sets: 3, reps: "To failure" },
        { name: "Bent-over Rows", sets: 3, reps: "10-12" },
        { name: "Plank", sets: 3, reps: "60 seconds" },
      ],
    },
    {
      day: "Saturday",
      focus: "Cardio and Core",
      exercises: [
        { name: "Running or Cycling", sets: 1, reps: "30-45 min" },
        { name: "Crunches", sets: 3, reps: "20" },
        { name: "Russian Twists", sets: 3, reps: "20 each side" },
        { name: "Leg Raises", sets: 3, reps: "15" },
      ],
    },
    {
      day: "Sunday",
      focus: "Rest Day",
      exercises: [
        { name: "Light Walking (optional)", sets: 1, reps: "20-30 min" },
        { name: "Yoga or Meditation", sets: 1, reps: "15-20 min" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Weekly Gym Routine</h1>
        <div className="space-y-6">
          {routine.map((day, index) => (
            <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900">{day.day} - {day.focus}</h2>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {day.exercises.map((exercise, exerciseIndex) => (
                    <li key={exerciseIndex} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{exercise.name}</p>
                        <p className="text-sm text-gray-500">{exercise.sets} sets x {exercise.reps} reps</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}