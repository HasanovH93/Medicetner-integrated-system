const handleChosenCheckboxes = (
  formData,
  setFormData,
  name,
  checked,
  value = null
) => {
  setFormData((prevFormData) => {
    const existingCheckboxIndex = formData.chosenCheckboxes.findIndex((item) =>
      item.hasOwnProperty(name)
    );

    let updatedChosenCheckboxes;

    if (checked) {
      if (existingCheckboxIndex === -1) {
        updatedChosenCheckboxes = [
          ...formData.chosenCheckboxes,
          value ? { [name]: value } : { [name]: {} },
        ];
      } else {
        updatedChosenCheckboxes = formData.chosenCheckboxes;
      }
    } else {
      updatedChosenCheckboxes = formData.chosenCheckboxes.filter(
        (item) => !item.hasOwnProperty(name)
      );
    }

    return {
      ...formData,
      chosenCheckboxes: updatedChosenCheckboxes,
    };
  });
};

export default handleChosenCheckboxes;
