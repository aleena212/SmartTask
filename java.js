 
//  change mode
 function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }

//   add task in list
  const addBtn=document.querySelector("#add");

  addBtn.addEventListener("click",()=>{
    let taskName = document.querySelector(".task-input").value;
    let category = document.querySelector(".category").value;
    let dueDate = document.querySelector(".date-input").value;
    console.log("Task:", taskName);
    console.log("Category:", category);
    console.log("Due Date:", dueDate);
  

 const newTask=document.createElement("li");

 newTask.innerHTML=`<strong>${taskName}</strong>(${category})-Due:${dueDate}
 <button class="edit-btn">Edit</button>
 <button class="delete-btn">Delete</button>`;

 document.querySelector(".tasklist").appendChild(newTask);

  document.querySelector(".task-input").value = "";
  document.querySelector(".category").value = "";
  document.querySelector(".date-input").value = "";
  
  const deleteBtn = newTask.querySelector(".delete-btn");
  deleteBtn.addEventListener("click",()=> {
    newTask.remove();
    });

    const editBtn = newTask.querySelector(".edit-btn");
    editBtn.addEventListener("click",()=> {
        
        document.querySelector(".task-input").value = taskName;
        document.querySelector(".category").value = category;
        document.querySelector(".date-input").value = dueDate;
        newTask.remove();
    });

});

// search task
const searchInput=document.querySelector(".search-input")

searchInput.addEventListener("input", () => {
    
    const filterText = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll(".tasklist li");
    tasks.forEach(task => {
        
        const taskText = task.textContent.toLowerCase();

        if (taskText.includes(filterText)) {
            task.style.display = "";     
        } else {
            task.style.display = "none"; 
        }
    });
});

// quotes

 const URL = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";
const quoteText = document.getElementById("quoteText");

async function getQuotes() {
  const resp = await fetch(URL);
  const [data] = await resp.json();
  quoteText.innerText = `"${data.q}" — ${data.a}`;
}

window.addEventListener('load', getQuotes);
