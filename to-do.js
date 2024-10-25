document.querySelector(".add-list").addEventListener("click", () => {
   
    // Take input from textfield
    const input = document.getElementById("input").value; // ID "input" nahi hai, yahan aapka sahi ID hona chahiye
    
    // Check if input is empty
    if (input === "") {
        return;
    }
 
    console.log(input);
       
    const task_add = document.createElement("li");
    task_add.textContent = input;


      // Task ko click karte hi delete karne ke liye event listener add karna
   task_add.addEventListener("click", () => {
    task_add.remove();
});
 
    document.querySelector(".List").appendChild(task_add);
    document.getElementById("todo-input").value = ""; // Input field ko clear karna

    
 });
