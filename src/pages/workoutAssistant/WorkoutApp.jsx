import React, { useState, useEffect } from 'react';

const CATEGORIES = ['push', 'pull', 'leg', 'upper', 'lower', 'summary'];

const WorkoutApp = () => {
    const [category, setCategory] = useState('push');
    const [exercises, setExercises] = useState({});
    const [newExerciseName, setNewExerciseName] = useState('');

    // Load from storage or placeholder
    useEffect(() => {
        // TODO: Replace with actual load from file or backend
        const storedData = {}; // Load from file based on category
        setExercises(storedData[category] || {});
    }, [category]);

    const handleAddExercise = () => {
        if (!newExerciseName.trim()) return;
        setExercises(prev => ({
            ...prev,
            [newExerciseName]: []
        }));
        setNewExerciseName('');
    };

    const handleAddSet = (exerciseName, weight, reps) => {
        if (!weight || !reps) return;
        const newSet = { weight, reps, id: Date.now() };
        setExercises(prev => ({
            ...prev,
            [exerciseName]: [...prev[exerciseName], newSet]
        }));
    };

    const handleDeleteSet = (exerciseName, setId) => {
        setExercises(prev => ({
            ...prev,
            [exerciseName]: prev[exerciseName].filter(set => set.id !== setId)
        }));
    };

    const handleSaveWorkout = () => {
        const today = new Date().toISOString().split('T')[0];
        const newWorkoutData = {
            category,
            date: today,
            exercises
        };

        console.log('Saving workout data:', newWorkoutData);
        // TODO: Save to CSV or backend
    };

    return (
        <div className="workout-app">
            <h1>Workout Assistant</h1>

            <label>
                Select Category:&nbsp;
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </label>

            <div className="exercises-list">
                {Object.entries(exercises).map(([exerciseName, sets]) => (
                    <div key={exerciseName} className="exercise-card">
                        <h3>{exerciseName}</h3>

                        {sets.map(set => (
                            <div key={set.id} className="set-entry">
                                <span>{set.weight}kg x {set.reps}</span>
                                <button onClick={() => handleDeleteSet(exerciseName, set.id)}>❌</button>
                            </div>
                        ))}

                        <div className="add-set">
                            <input type="number" placeholder="Weight (kg)" id={`weight-${exerciseName}`} />
                            <input type="number" placeholder="Reps" id={`reps-${exerciseName}`} />
                            <button onClick={() => {
                                const weight = document.getElementById(`weight-${exerciseName}`).value;
                                const reps = document.getElementById(`reps-${exerciseName}`).value;
                                handleAddSet(exerciseName, weight, reps);
                            }}>
                                Add Set
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="add-exercise">
                <input
                    type="text"
                    placeholder="New exercise name"
                    value={newExerciseName}
                    onChange={e => setNewExerciseName(e.target.value)}
                />
                <button onClick={handleAddExercise}>Add Exercise</button>
            </div>

            <button onClick={handleSaveWorkout} style={{ marginTop: '20px' }}>
                Save Workout
            </button>
        </div>
    );
};

export default WorkoutApp;
