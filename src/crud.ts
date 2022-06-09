import { Customer } from "./customer";

export class Database {
  private table: HTMLElement | null;
  public database: Customer[] = [];

  public constructor(table: HTMLElement | null) {
    this.table = table;
  }

  public update(): void {
    let database = this.database.map(customer => `
      <div class="card">
        <h5 class="identifier">
          ${customer.id}. 
          <span class="card-name">${customer.name}</span>
        </h5>
        <div class="other-data">
          <label>${customer.haircut}</label>
          <label>${customer.date}</label>
          <label>${customer.time}</label>
        </div>
      </div>`
    ).join("<br>")

    if (this.table) this.table.innerHTML = database
  }

  public create(customer: Customer): void {
    this.database.push(customer)
    this.update();
  }

  public delete(id: string): void {
    let new_database = this.database.filter(customer => !(customer.id == parseInt(id)))
    this.database = [...new_database];
    this.update();
  }
}

