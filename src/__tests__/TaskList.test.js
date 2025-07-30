import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

describe("TaskList Component", () => {
  test("displays all items when initially rendered", () => {
    const mockDeleteTask = jest.fn();
    const { getAllByTestId } = render(
      <TaskList tasks={TASKS} onDeleteTask={mockDeleteTask} />
    );

    // Verify the correct number of tasks are rendered
    const taskElements = getAllByTestId("task");
    expect(taskElements).toHaveLength(TASKS.length);
  });
});