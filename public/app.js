document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("max-sm:hidden");
  document.querySelector(".overlay").classList.toggle("hidden");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".navbar").classList.add("max-sm:hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

AOS.init({
  duration: 700,
  once: true,
});
