export abstract class BaseModel<T extends { id: string | number }> {
  private readonly storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }
  // ** Worked With Array Data Type ** //

  protected getAllItems(): T[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  public saveAllItems(items: T[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  create(item: Omit<T, "id">): T {
    const items = this.getAllItems();
    const newItem = {
      ...item,
      id: this.generateId(),
    } as T;
    items.push(newItem);
    this.saveAllItems(items);
    return newItem;
  }

  read(id?: string | number): T | T[] | null {
    const items = this.getAllItems();
    return id ? items.find((item) => item.id == id) || null : items;
  }

  update(id: string | number, updatedItem: Partial<T>): T | null {
    const items = this.getAllItems();
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) return null;

    const updated = { ...items[index], ...updatedItem };
    items[index] = updated;
    this.saveAllItems(items);
    return updated;
  }

  delete(id: string): boolean {
    const items = this.getAllItems();
    const filteredItems = items.filter((item) => item.id !== id);
    if (items.length === filteredItems.length) return false;
    this.saveAllItems(filteredItems);
    return true;
  }

  // ** Worked With Array Data Type ** //

  // ** Worked With Object Data Type ** //

  public saveItem(item: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(item));
  }

  public readByStorageKey(storageKey: string) {
    const result = localStorage.getItem(storageKey);
    return result ? JSON.parse(result) : null;
  }

  public updateByStorageKey(item: any) {
    const items = this.getAllItems();
    items.push(item);
    this.saveItem(items);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  // ** Worked With Object Data Type ** //
}
