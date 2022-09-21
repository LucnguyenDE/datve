export const disableButton = (e, status) => {
  const choosen_button =
    status === true
      ? document.getElementById(e.currentTarget.id)
      : document.getElementById(e.currentTarget.dataset.name);
  choosen_button.classList =
    status === true
      ? "w-8 h-8 bg-rose-600 border-4 border-amber-600 rounded text-black"
      : "w-8 h-8 bg-white border-4 border-amber-600 rounded text-black";
  choosen_button.disabled = status;
};
