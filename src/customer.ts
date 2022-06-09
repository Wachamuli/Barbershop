export class Customer {
  private static idCounter = 0;

  public id: number;
  public name: string;
  public haircut: string;
  public date: string | undefined;
  public time: string | undefined;

  public constructor(
    name: string,
    haircut: string,
    date: Date | null,
    time: Date | null) {

    Customer.idCounter += 1;
    this.id = Customer.idCounter;
    this.name = name;
    this.haircut = haircut;
    this.date = date?.toLocaleDateString("en-US");
    this.time = time?.toLocaleString(
      "en-US",
      { hour: "numeric", hour12: true, minute: "numeric" }
    );
  }
}
