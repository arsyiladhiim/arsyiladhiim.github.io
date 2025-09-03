// Ganti dengan Public Key Anda
  emailjs.init("gZk7BMAEqFKGuUPY1");

  function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");

    const baseClasses =
      "px-6 py-4 rounded-2xl shadow-2xl text-white font-medium transform transition-all duration-500 max-w-sm w-full backdrop-blur-xl border border-white/20 flex items-center space-x-3";
    
    const typeClasses =
      type === "success"
        ? "bg-green-500/40"
        : "bg-red-500/40";

    // Tentukan ikon SVG
    const icon =
      type === "success"
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>`;

    toast.className =
      baseClasses +
      " " +
      typeClasses +
      " opacity-0 -translate-y-10 scale-90";

    toast.innerHTML = `
      ${icon}
      <span class="flex-1">${message}</span>
    `;

    container.appendChild(toast);

    // Show animation
    setTimeout(() => {
      toast.classList.remove("opacity-0", "-translate-y-10", "scale-90");
      toast.classList.add("opacity-100", "translate-y-0", "scale-100");
    }, 100);

    // Hide after 3.5s
    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0", "scale-100");
      toast.classList.add("opacity-0", "-translate-y-10", "scale-90");
      setTimeout(() => toast.remove(), 500);
    }, 3500);
  }


  // Handle Form Submit
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_16qlifl", "template_rmalcj6", this)
      .then(() => {
        showToast("✅ Message sent successfully!", "success");
        this.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        showToast("❌ Failed to send message. Please try again.", "error");
      });
  });