document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const colorPicker = document.getElementById("colorPicker");
    const noteArea = document.getElementById("noteArea");
    const noteEditor = document.getElementById("noteEditor");
    const noteTextarea = document.getElementById("noteTextarea");
    const updateButton = document.getElementById("updateButton");
    const deleteButton = document.getElementById("deleteButton");
    const closeEditor = document.getElementById("closeEditor");

    let selectedNote = null;

    // Show/hide color picker
    addButton.addEventListener("click", () => {
        colorPicker.style.display = colorPicker.style.display === "none" ? "flex" : "none";
        addButton.classList.toggle("rotate");
    });

    // Create a new note
    colorPicker.addEventListener("click", (event) => {
        if (event.target.classList.contains("colorBlock")) {
            const color = event.target.style.backgroundColor;
            createNote(color);
        }
    });

    // Function to create a new note
    function createNote(color) {
        const noteBox = document.createElement("div");
        noteBox.className = "noteBox";
        noteBox.style.backgroundColor = color;

        noteBox.addEventListener("click", () => openEditor(noteBox));

        noteArea.appendChild(noteBox);
        colorPicker.style.display = "none";
        addButton.classList.remove("rotate");
    }

    // Open the note editor
    function openEditor(noteBox) {
        selectedNote = noteBox;
        noteTextarea.value = noteBox.textContent || "";
        noteEditor.style.display = "block";
    }

    // Update the note
    updateButton.addEventListener("click", () => {
        if (selectedNote) {
            selectedNote.textContent = noteTextarea.value;
            noteEditor.style.display = "none";
            selectedNote = null;
        }
    });

    // Delete the note
    deleteButton.addEventListener("click", () => {
        if (selectedNote) {
            noteArea.removeChild(selectedNote);
            noteEditor.style.display = "none";
            selectedNote = null;
        }
    });

    // Close the note editor
    closeEditor.addEventListener("click", () => {
        noteEditor.style.display = "none";
        selectedNote = null;
    });
});
