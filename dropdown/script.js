document.addEventListener('click', (e) => {
  const isDropDownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) { return }

  let currDropDown;
  if (isDropDownButton) {
    currDropDown = e.target.closest('[data-dropdown]');
    currDropDown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currDropDown) { return }
    dropdown.classList.remove('active');
  })
})

// Navlink button
document.querySelectorAll('.navlink[data-dropdown-button]').forEach((button) => {
  button.addEventListener('click', (e) => {
    const dropdownMenu = e.target.nextElementSibling;
    document.querySelectorAll('[data-dropdown].active').forEach((activeDropdown) => {
      if (activeDropdown === dropdown) { return }
      activeDropdown.classList.remove('active');
    })
    if (dropdownMenu) { dropdownMenu.classList.toggle('active'); }
    event.stopPropagation();
  })
});

document.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown-menu')) {
    document.querySelectorAll('.dropdown-menu.active').forEach((activeDropdownMenu) => {
      activeDropdownMenu.classList.remove('active');
    })
  }
});
