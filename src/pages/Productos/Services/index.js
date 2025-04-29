const deleteAsync = async (id) => {
  try {
    const data = await fetch(`https://localhost:7062/api/Productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    console.log(json);
    return true;
  } catch (error) {
    console.log("Error : ", error);
    return false;
  }
};

const getAllAsync = async () => {
  try {
    const data = await fetch("https://localhost:7062/api/Productos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.log("Error : ", error);
    return [];
  }
};

const getByIdAsync = async (id) => {
  try {
    const data = await fetch(`https://localhost:7062/api/Productos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    return json;
  } catch (error) {
    console.log("Error : ", error);
    return null;
  }
};

const editAsync = async (producto) => {
  try {
    const data = await fetch(
      `https://localhost:7062/api/Productos/${producto.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      }
    );
    const json = await data.json();
    console.log(json);
    return true;
  } catch (error) {
    console.log("Error : ", error);
    return false;
  }
};

const saveAsync = async (producto) => {
  try {
    const data = await fetch("https://localhost:7062/api/Productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    const json = await data.json();
    console.log(json);
    return true;
  } catch (error) {
    console.log("Error : ", error);
    return false;
  }
};

export { deleteAsync, getAllAsync, getByIdAsync, editAsync, saveAsync };
