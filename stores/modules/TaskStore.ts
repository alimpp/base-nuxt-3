import { BaseStore } from "../core/BaseStore";
import { StoreManager } from "../core/StoreManager";

interface ITask {
  id: number | string;
  name: string;
}

interface ITasks {
  tasks: Array<ITask>;
}

export class TaskStore extends BaseStore<ITasks> {
  private static _instance: TaskStore;

  public static getInstance(): TaskStore {
    if (!TaskStore._instance) {
      TaskStore._instance = new TaskStore();
    }
    return TaskStore._instance;
  }

  private constructor() {
    super("task", {
      tasks: [],
    });
    StoreManager.register(this);
  }

  async addTask(task: ITask) {
    const userStore = useUserStore();
    this._state.tasks.push(task);
    userStore.fetchUsers();
  }

  public reset() {
    this._state.tasks = [];
  }
}
