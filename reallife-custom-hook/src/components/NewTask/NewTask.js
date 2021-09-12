import useHttp from '../../hooks/use-tasks';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: addTask } = useHttp();

  const addTaskHandler = (taskText) => {
    addTask(
      {
        method: 'POST',
        url: 'http://localhost:5000/tasks',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: taskText }),
      },
      (newTask) => props.onAddTask(newTask)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={addTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
