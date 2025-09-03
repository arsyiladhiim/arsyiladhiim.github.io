// Ganti dengan Public Key Anda
  emailjs.init("YOUR_PUBLIC_KEY");

  function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");

    const baseClasses = "px-4 py-3 rounded-lg shadow-lg text-white transform transition-all duration-500";
    const typeClasses = type === "success" ? "bg-green-600" : "bg-red-600";

    toast.className = baseClasses + " " + typeClasses + " translate-x-full opacity-0";
    toast.innerHTML = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove("translate-x-full", "opacity-0");
      toast.classList.add("translate-x-0", "opacity-100");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("translate-x-0", "opacity-100");
      toast.classList.add("translate-x-full", "opacity-0");
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }

  // Handle Form Submit
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        showToast("✅ Message sent successfully!", "success");
        this.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        showToast("❌ Failed to send message. Please try again.", "error");
      });
  });