import useMutation from "../api/useMutation";

function ActivityForm() {
  const { mutate, loading, error } = useMutation("POST", "/activities", [
    "allActivities",
  ]);
  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    mutate({ name: name, description: description });
  };

  return (
    <>
      <h2>Add new activity</h2>
      <form action={addActivity}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <button>{loading ? "Adding..." : "Add activity"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}

export default ActivityForm;
