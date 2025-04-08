document.addEventListener("DOMContentLoaded", () => {
    // Timer and Breathing Cycle
    const timer = document.getElementById("timer");
    const statusText = document.getElementById("status");
    const playBtn = document.querySelector(".play");
    const buttons = document.querySelectorAll(".btn");
  
    const steps = [
      { name: "Breathe", time: 4 },
      { name: "Hold", time: 7 },
      { name: "Release", time: 8 }
    ];
  
    function setActiveButton(name) {
      buttons.forEach(btn => {
        btn.classList.toggle("active", btn.textContent.trim() === name);
      });
    }
  
    function startBreathingCycle(stepIndex = 0) {
      if (stepIndex >= steps.length) return;
  
      const step = steps[stepIndex];
      let count = step.time;
  
      setActiveButton(step.name);
      if (statusText) statusText.textContent = step.name;
      timer.textContent = count;
  
      const interval = setInterval(() => {
        count--;
        if (count >= 0) {
          timer.textContent = count;
        } else {
          clearInterval(interval);
          startBreathingCycle(stepIndex + 1);
        }
      }, 1000);
    }
  
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        startBreathingCycle(0);
      });
    }
  
    // Journal Entries
    const newEntryBtn = document.querySelector(".new-entry");
    const entriesContainer = document.querySelector(".entries");
    const entryForm = document.querySelector(".entry-form");
    const entryInput = document.querySelector(".entry-input");
    const saveEntryBtn = document.querySelector(".save-entry");
  
    let entryCount = 0;
  
    if (newEntryBtn && entriesContainer && entryForm && entryInput && saveEntryBtn) {
      newEntryBtn.addEventListener("click", () => {
        entryForm.style.display = "block";
        entryInput.focus();
      });
  
      saveEntryBtn.addEventListener("click", () => {
        const text = entryInput.value.trim();
        if (text === "") {
          alert("Please write something.");
          return;
        }
  
        entryCount++;
  
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: '2-digit'
        });
  
        const formattedTime = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
  
        const entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = `#${entryCount} ${formattedDate} <span class="time">${formattedTime.toLowerCase()}</span><br>${text}`;
  
        entriesContainer.prepend(entry);
        entryInput.value = "";
        entryForm.style.display = "none";
      });
    }
  });
  