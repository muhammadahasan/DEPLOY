// Get references
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "flex-1 cursor-pointer";
  span.onclick = () => span.classList.toggle("line-through");

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "ml-4 text-red-500 hover:text-red-700 font-bold";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
}
