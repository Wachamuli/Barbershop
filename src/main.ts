import { Customer } from "./customer";
import { Database } from "./crud";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div id="grid">
  <div id="left-side">
    <h1>Beatiful Beards</h1>

    <form id="form">
      <div class="control">      
        <label>Name</label>
        <input id="name" placeholder="John Doe" />
      </div>
      <div class="control">      
        <label>Haircut</label>
        <select id="haircut">
          <option value="Slicked back hair">Slicked back hair</option>
          <option value="Flat top">Flat top</option>
          <option value="Long hair undercut">Long hair undercut</option>
          <option value="Long hair undercut Viking Chic">Long hair undercut Viking Chic</option>
          <option value="Short sides + curly hair">Short sides + curly hair</option>
          <option value="Light taper fade + long hair">Light taper fade + long hair</option>
        </select>
      </div>

      <div id="datetime" >
        <div class="control">      
          <label>Date</label>
          <input id="date" type="date" />
        </div>
        <div class="control">      
          <label>Time</label>
          <input id="time" type="time" />
        </div>
      </div>

      <button id="submit" type="submit">Submit</button>
    </form>

    <form id="delete-form">
      <div class="control">
        <label>Remove a customer</label>
        <input id="delete" type="number" />
      <button id="delete-btn" type="submit">Delete</button>
      </div>
    </form>
  </div>

  <div id="right-side">
    <div id="queue"></div>
  </div>

</div>
`;

const name = document.getElementById("name") as HTMLInputElement;
const haircut = document.getElementById("haircut") as HTMLInputElement;
const date = document.getElementById("date") as HTMLInputElement;
const time = document.getElementById("time") as HTMLInputElement;
const delete_ = document.getElementById("delete") as HTMLInputElement;

const submitBtn = document.getElementById("submit");
const deleteBtn = document.getElementById("delete-btn")

const queue = document.getElementById("queue");

const db = new Database(queue);

function cleanForm(): void {
  name.value = "";
  date.value = "";
  time.value = "";
}

submitBtn?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  db.create(
    new Customer(
      name.value,
      haircut.value,
      date.valueAsDate,
      time.valueAsDate,
    )
  )
  cleanForm();
});

deleteBtn?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  db.delete(delete_.value);
});


