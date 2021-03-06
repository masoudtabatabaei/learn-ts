import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/hasFormatter";
import { ListTemplate } from './classes/listTemplate.js';

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const listTemplate = new ListTemplate(ul);

form.addEventListener('submit' , (e:Event) => {
    e.preventDefault();
    let values: [string , string , number] = [toFrom.value , details.value , amount.valueAsNumber];
    let doc:HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    listTemplate.render(doc , type.value , 'end');
})
